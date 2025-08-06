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

export const findUserByEmail = async (email) =>
{
  try{
    // console.log(User);
    const user = await User.findByEmail(email);
    // console.log(user);
    return user;

  }
  catch(error)
  {
    throw new Error(`Error while searching Email: ${error.message}`);
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