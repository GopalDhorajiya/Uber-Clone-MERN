import express from "express";
import { getUsers } from "../../controllers/UserControllers.js";


export const router = express.Router();

router.get('/', getUsers);