import connectDB from "./config/dbconfig.js";
import express from 'express';
import {router} from './routes/apiRoutes.js';
import { PORT } from "./config/serverconfig.js";
const app = express();

app.get('/', async (req, res) => {
   res.send('Hello, Express!');
});

app.use(express.json());
app.use('/api',router);
// Start the server
app.listen(PORT, () => {
    console.log(`Express app listening at http://localhost:${PORT}`);
});

connectDB();