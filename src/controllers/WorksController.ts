import { Request, Response } from "express";
import Work from "../Models/Work";
import User from "../Models/User";
import { WorkSchema, UserSchema } from "../interfaces/interfaces";

export const getWork = async (_req: Request, res: Response) => {
  try {
    const works = await Work.find();
    res.json(works);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

export const postWork = async (req: Request, res: Response) => {
  const { projectName, description, gitHubUrl, image, pageUrl, userId } =
    req.body as WorkSchema;

  try {
    const saveWork = new Work({
      projectName,
      description,
      gitHubUrl,
      image,
      pageUrl,
      userId,
    });
    const workSaved = await saveWork.save();
    (await User.findByIdAndUpdate(userId, {
      $push: { works: workSaved._id },
    })) as UserSchema;
    res.status(200).json({ msg: "Work have been saved" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
