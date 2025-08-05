import { getUsers as getUsersFromRepository } from "../repository/userRepository.js";


export const getUsers = async () =>{
    const users = await getUsersFromRepository();
    return users;
}