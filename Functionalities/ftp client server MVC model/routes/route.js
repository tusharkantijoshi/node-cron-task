import express from "express";

// import { ftpClient, jsonData } from '../controllers/control.js';

import { jsonData } from '../controllers/control.js';

const router = express.Router();

// router.get('/file', ftpClient);

router.get('/', jsonData);

export default router;