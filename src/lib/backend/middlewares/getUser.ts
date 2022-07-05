import admin from "$lib/services/firebase-admin";
import getCookies from "./getCookies";

export default async function getUser(req: Request) {
  const cookies = getCookies(req);
  const jwt = cookies["firebase-token"];

  if (!jwt) return null;

  try {
    return await admin.auth().verifyIdToken(jwt);
  } catch (e) {
    return null;
  }
}
