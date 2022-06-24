import type { NextApiResponse } from "next";
import RssFeed from "backend/models/RssFeed";
import Parser from "rss-parser";
import runFirebaseAuth, {
  AuthNextApiRequest,
} from "backend/middlewares/runFirebaseAuth";
import runMongoose from "backend/middlewares/runMongoose";

async function handler(req: AuthNextApiRequest, res: NextApiResponse) {
  const user = req.user;
  if (!user) return res.status(403).json({ status: 403 });
  const uid = user.uid;

  if (!req.query.feedUrl) return res.status(404).json({ status: 404 });
  /**
   * PATCH
   * Update the lastRead field of the selected rss feed
   */
  if (req.method === "PATCH") {
    const rssFeed = await RssFeed.findOne({
      user: uid,
      url: req.query.feedUrl,
    }).exec();
    if (!rssFeed) return res.status(404).json({ status: 404 });

    rssFeed.lastRead = new Date().toString();
    const newFeed = await rssFeed.save();

    return res.status(200).json({ status: 200, feed: newFeed });
  }

  /**
   * GET
   * Récupère le contenu d'un feed
   */
  if (req.method === "GET") {
    const feedDoc = await RssFeed.findOne({
      user: uid,
      url: req.body.feedUrl,
    }).exec();

    if (!feedDoc) return res.status(404).json({ status: 404 });

    const parser = new Parser();

    const feedData = await parser.parseURL(feedDoc.url);
    feedData.id = feedDoc._id.toString();
    feedData.feedUrl = feedDoc.url;
    feedData?.items?.forEach((item) => {
      if (!item.pubDate) return;

      const itemPubDate = new Date(item.pubDate);
      item.new = !feedDoc.lastRead || new Date(feedDoc.lastRead) < itemPubDate;
    });

    return res.status(200).json({
      status: 200,
      feed: feedData,
    });
  }

  return res.status(404).json({ status: 404 });
}

export default runMongoose(runFirebaseAuth(handler));
