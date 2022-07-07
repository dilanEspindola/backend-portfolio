import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User as NewUser, UserSchema } from "../interfaces/interfaces";
import User from "../Models/User";
import config from "../config";

export const userGet = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().populate("works");
    return res.json(users);
  } catch ({ message }) {
    return res.status(500).json({
      message: message,
    });
  }
};

export const userRegister = async (req: Request, res: Response) => {
  const { name, password, email } = req.body as NewUser;
  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    const saveUser = new User({ name, password: hashedPassword, email });
    const userSaved = (await saveUser.save()) as NewUser;
    const token = jwt.sign({ id: userSaved._id }, config.JWT_SECRET as string, {
      expiresIn: "24h",
    });
    return res.status(200).json({ msg: "User have been saved", token });
  } catch (error) {
    throw new Error(error as string);
  }
};

export const userLogin = async (_req: Request, res: Response) => {
  res.send("ok");
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.json("User deleted");
  } catch ({ message }) {
    return res.status(500).json({ message: message });
  }
};
