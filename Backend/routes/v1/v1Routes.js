import express from 'express';
import {router as userRoutes}  from './userRoutes.js';
import e from 'express';

const router = express.Router();
router.use('/user', userRoutes);

export { router };