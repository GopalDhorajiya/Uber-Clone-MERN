import { getUsers as getUsersFromRepository } from "../repository/userRepository.js";
import { createUser as createUserInRepository } from "../repository/userRepository.js";
import { findUserByEmail as findUserByEmailRepository } from "../repository/userRepository.js";
import { generateToken } from "../utils/jwtutils.js";


export const getUsers = async () =>{
    const users = await getUsersFromRepository();
    return users;
}

export const createUser = async (userData) => {
    const existinguser = await findUserByEmailRepository(userData.email);
    console.log(existinguser);
    
    if(existinguser)
    {
        throw {
            massage : 'Email already exist',
            status : 400
        }
    }
    const user = await createUserInRepository(userData);
    return user;
}

export const loginUser = async (userData) =>
{
    const user = await findUserByEmailRepository(userData.email);
    if(!user)
    {
        throw{
            massage : 'invalid pass or email',
            status : 400 
        }
    }

    const isPasswordValid = await user.camparePassword(userData.password);

    if(!isPasswordValid)
    {
        throw{
            massage : 'invalid pass or email',
            status : 400 
        }
    }
    const token = generateToken(user);
    return {
        token,
        user:
        {
            id : user._id,
            name : user.name ,
            email : user.email,
        }
    }
}
