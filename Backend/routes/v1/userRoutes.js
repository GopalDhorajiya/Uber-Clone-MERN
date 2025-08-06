import express from "express";
import { getUsers , createUser , loginUser} from "../../controllers/UserControllers.js";
import { validateToken } from "../../middleware/authMiddleware.js"; 

export const router = express.Router();

router.get('/',validateToken, getUsers);

router.post('/', createUser);

router.post('/login',loginUser);