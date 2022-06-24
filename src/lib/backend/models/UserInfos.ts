import mongoose from "mongoose";

interface UserInfos {
  user: string;
  backgroundUrl?: string;
}

const RssFeedSchema = new mongoose.Schema<UserInfos>({
  user: {
    type: String,
    required: [true, "Please add a user"],
    unique: true,
  },
  backgroundUrl: {
    type: String,
    required: false,
  },
});

const UserInfosModel =
  mongoose.models.RssFeed ||
  mongoose.model<UserInfos>("RssFeed", RssFeedSchema);

export default UserInfosModel as mongoose.Model<UserInfos, {}, {}, {}>;
export type { UserInfos };
