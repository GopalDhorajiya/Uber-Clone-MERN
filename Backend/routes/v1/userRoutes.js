import express from "express";
import { getUsers , createUser , loginUser} from "../../controllers/UserControllers.js";


export const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.post('/login',loginUser);