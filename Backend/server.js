import connectDB from "./config/dbconfig.js";
import express from 'express';
import {router} from './routes/apiRoutes.js';
import { PORT } from "./config/serverconfig.js";
import User from "./schema/user.js";
import { findUserByEmail } from "./repository/userRepository.js";
const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
    // console.log(req.body);
   const email = req.body.email;
   const user = await findUserByEmail(email);
//    console.log(user);
   return res.status(200).json(user);
});

app.use('/api',router);
// Start the server
app.listen(PORT, () => {
    console.log(`Express app listening at http://localhost:${PORT}`);
});

connectDB();