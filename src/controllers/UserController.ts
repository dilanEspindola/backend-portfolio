import { Request, Response } from "express";

export const userGet = (_req: Request, res: Response) => {
  return res.json({ msg: "hola" });
};

export const userPost = (_req: Request, res: Response) => {
  return res.send("ok");
};
