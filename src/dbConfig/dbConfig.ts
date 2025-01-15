import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongodb connected");
    });

    connection.on("error", (error) => {
      console.log("something went wrong when connecting to the Database");
      console.log("Error: ", error);
      process.exit()
    });
  } catch (error) {
    console.log("something went wrong when connecting to the Database");
    console.log("Error: ", error);
  }
}
