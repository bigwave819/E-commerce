import express from "express";
import { createUser } from "../controllers/userContoller.js"

const router = express.Router()

router.route('/').post(createUser)


export default router;