import mongoose from "mongoose";

const connection = { isConnected: 0 };

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.DB_URI || "");
    connection.isConnected = db.connections[0].readyState;
  } catch (e) {
    console.error("db error: ", e);
  }
}

export default dbConnect;
