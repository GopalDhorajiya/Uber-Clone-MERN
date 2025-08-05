import express from "express";
import { getUsers , createUser} from "../../controllers/UserControllers.js";


export const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);