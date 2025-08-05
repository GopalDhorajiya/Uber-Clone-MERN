import User from "../schema/user.js";

export const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
}

export const getUsers = async () =>{
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
}