import mongoose from "mongoose";

interface RssFeed {
  url: string;
  lastRead?: string;
  user: string;
}

const RssFeedSchema = new mongoose.Schema<RssFeed>({
  url: {
    type: String,
    required: [true, "Please add a source url"],
  },
  lastRead: {
    type: String,
    required: false,
  },
  user: {
    type: String,
    required: [true, "Please add a user"],
  },
});

RssFeedSchema.index({ url: 1, user: 1 }, { unique: true });

const RssFeedModel =
  mongoose.models.RssFeed || mongoose.model<RssFeed>("RssFeed", RssFeedSchema);

export default RssFeedModel as mongoose.Model<RssFeed, {}, {}, {}>;
export type { RssFeed };
