import { getUsers as getUsersFromServices } from "../services/userServices.js";
import { createUser as createUserInServices } from "../services/userServices.js";
import { loginUser as loginUserServices } from "../services/userServices.js";
import {errorResponse , successResponse} from "../utils/response.js";
import { StatusCodes } from "http-status-codes";

export const getUsers = async (req, res) => {
  try {
    const users = await getUsersFromServices();
    successResponse(res,StatusCodes.OK, users, "Users fetched successfully");
  } catch (error) {
    errorResponse(error,res);
  }
}

export const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await createUserInServices({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    });
    successResponse(res,StatusCodes.CREATED, user, "User created successfully");
  } catch (error) {
    // throw new Error(`Error creating user: ${error.message}`);
    errorResponse(res, error);
  }
}

export const loginUser = async(req,res)=>
{
  try {
    const userData = req.body;
    const user = await loginUserServices(userData);
    if(!user)
    {
      errorResponse(res);
    }
    console.log(user);
    successResponse(res,StatusCodes.ACCEPTED,user,"Sucssefully login");
  } catch (error) {
    errorResponse(res,error);
  }
}