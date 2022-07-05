import dbConnect from "../../../lib/backend/prismaClient";
import RssFeed from "$lib/backend/models/RssFeed";
import admin from "$lib/services/firebase-admin";
import Parser from "rss-parser";
import type { RequestHandler } from "@sveltejs/kit";
import cookie from "cookie";
import getUser from "../../../lib/backend/middlewares/getUser";

// Ajoute un nouveau flux à l'utilisateur courant
export const post: RequestHandler = async function (event) {
  await dbConnect();
  const user = await getUser(event.request);

  if (!user) return { status: 403 };

  const uid = user.uid;
  const body: { url?: string } = await event.request.json();

  if (!body.url) return { status: 404 };

  const newRssFeed = await RssFeed.create({
    url: body.url,
    user: uid
  });

  // return res.status(200).json({ rssFeed: newRssFeed });
  return {
    status: 200,
    body: { rssFeed: newRssFeed }
  };
};

/**
 * PATCH
 * Update the lastRead field of the selected rss feed
 */
export const patch: RequestHandler = async function (event) {
  // if (!req.body.url) return res.status(404).json({status: 404});
  //
  // const rssFeed = await RssFeed.findOne({
  //   user: uid,
  //   url: req.body.url
  // }).exec();
  // if (!rssFeed) return res.status(404).json({status: 404});
  //
  // rssFeed.lastRead = new Date().toString();
  // const newFeed = await rssFeed.save();
  //
  // return res.status(200).json({status: 200, feed: newFeed});
  return {
    status: 200,
    body: {}
  };
};

/**
 * GET
 * Récupère la liste des flux rss, et leurs contenus
 */
export const get: RequestHandler = async function (event) {
  // const feedDocs = await RssFeed.find({user: uid}).exec();
  //
  // const feeds: Parser.Output<{ [p: string]: any }>[] = [];
  // const pList: Promise<void>[] = [];
  // const parser = new Parser();
  //
  // feedDocs.forEach((feed) => {
  //   let p = new Promise<void>((resolve) => {
  //     parser.parseURL(feed.url).then((feedData) => {
  //       feedData.id = feed._id.toString();
  //       feedData.feedUrl = feed.url;
  //       feedData?.items?.forEach((item) => {
  //         if (!item.pubDate) return;
  //
  //         const itemPubDate = new Date(item.pubDate);
  //         item.new = !feed.lastRead || new Date(feed.lastRead) < itemPubDate;
  //       });
  //       feeds.push(feedData);
  //       resolve();
  //     });
  //   });
  //   pList.push(p);
  // });
  //
  // await Promise.all(pList);
  // return res.status(200).json({
  //   status: 200,
  //   feeds
  // });
  return { status: 200, body: {} };
};
