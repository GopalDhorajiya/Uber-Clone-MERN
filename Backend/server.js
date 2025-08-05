import connectDB from "./config/dbconfig.js";
import express from 'express';
import {router} from './routes/apiRoutes.js';
const app = express();

const port = process.env.PORT || 3000;
app.get('/', async (req, res) => {
   res.send('Hello, Express!');
});

app.use(express.json());
app.use(express.text());

app.use('/api',router);
// Start the server
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});

connectDB();