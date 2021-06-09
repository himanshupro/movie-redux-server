import express from "express";
import { getAllusers, signup, login } from "../Controller/users-controller";
const userRouter = express.Router();

userRouter.get("/", getAllusers)
          .post("/signup", signup)
          .post("/login", login)


export default userRouter;
