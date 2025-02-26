import mongoose from "mongoose";

async function db() {
  try {
    const connection = await mongoose.connect(`${process.env.DB_URL}`);
    console.log(
      `\n MongoDB connected || DB HOST: ${connection.connection.host}`
    );
  } catch (error) {
    console.error("DB Connection error", error);
    process.exit(1);
  }
}

export default db;