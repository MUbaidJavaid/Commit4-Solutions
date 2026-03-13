import mongoose from "mongoose";

declare global {
   
  var __mongooseConn: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/commit4solutions";

if (!MONGODB_URI) {
  // We deliberately throw here so misconfiguration is obvious in dev
  throw new Error(
    "MONGODB_URI is not set. Please add it to your environment (.env)."
  );
}

const cached = global.__mongooseConn || {
  conn: null as typeof mongoose | null,
  promise: null as Promise<typeof mongoose> | null,
};

global.__mongooseConn = cached;

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
