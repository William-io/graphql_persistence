import mongoose from "mongoose";
import mongoUrl from "./mongoUrl.js";

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

const widgetSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  soldout: Boolean,
  stores: Array
});

export const Widgets = mongoose.model("Widget", widgetSchema);