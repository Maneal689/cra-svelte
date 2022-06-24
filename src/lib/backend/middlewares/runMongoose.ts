import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../dbConnect";

function runMongoose(fn: NextApiHandler): NextApiHandler {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();
    return await fn(req, res);
  };
}

export default runMongoose;
