import mongoose from "mongoose";

function connectDB(url) {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected!"))
    .catch((error) => console.log("MongoDB not connected due to ", error));
}

export default connectDB;
