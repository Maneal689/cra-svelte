import admin from "firebase-admin";

const serviceAccount = JSON.parse(decodeURI(import.meta.env.VITE_FIREBASE_ADMIN_KEYS));

if (!admin.apps.length > 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export default admin;
