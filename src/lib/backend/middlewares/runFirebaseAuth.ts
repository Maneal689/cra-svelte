import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import admin from "../../services/firebase-admin";
import { auth } from "firebase-admin";
import DecodedIdToken = auth.DecodedIdToken;

export type AuthNextApiRequest = NextApiRequest & {
  user?: DecodedIdToken;
};

function runFirebaseAuth(
  fn: (req: AuthNextApiRequest, res: NextApiResponse) => Promise<unknown>
): NextApiHandler {
  return async function (req: AuthNextApiRequest, res: NextApiResponse) {
    const jwt = req.cookies["firebase-token"];

    if (!jwt) return res.status(403).json({ status: 403 });

    try {
      req.user = await admin.auth().verifyIdToken(jwt);
    } catch (e) {
      req.user = undefined;
    }
    return await fn(req, res);
  };
}

export default runFirebaseAuth;
