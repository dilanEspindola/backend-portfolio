import mongoose, { Schema, model } from "mongoose";
import { WorkSchema } from "../interfaces/interfaces";

const workSchema = new Schema<WorkSchema>(
  {
    projectName: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
    pageUrl: {
      type: String,
    },
    gitHubUrl: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

export default model("work", workSchema);
