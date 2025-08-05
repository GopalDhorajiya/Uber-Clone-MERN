import { getUsers as getUsersFromServices } from "../services/userServices.js";

export const getUsers = async (req, res) => {
  try {
    const users = await getUsersFromServices();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}