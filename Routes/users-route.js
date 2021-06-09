"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_controller_1 = require("../Controller/users-controller");
var userRouter = express_1.default.Router();
userRouter.get("/", users_controller_1.getAllusers)
    .post("/signup", users_controller_1.signup)
    .post("/login", users_controller_1.login);
exports.default = userRouter;
