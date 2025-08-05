import { getUsers as getUsersFromRepository } from "../repository/userRepository.js";
import { createUser as createUserInRepository } from "../repository/userRepository.js";

export const getUsers = async () =>{
    const users = await getUsersFromRepository();
    return users;
}

export const createUser = async (userData) => {
    const user = await createUserInRepository(userData);
    return user;
}