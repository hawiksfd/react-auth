import { verify } from "argon2";
import express from "express";
import { CreateUser, UpdateUser, DeleteUser, getUsers, getUserById } from "../controller/UsersContr.js"
import { verifyAdmin, verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.post('/users', verifyUser, verifyAdmin, CreateUser);
router.patch('/users/:id', verifyUser, UpdateUser);
router.delete('/users/:id', verifyUser, verifyAdmin, DeleteUser);
router.get('/users', verifyUser, verifyAdmin, getUsers);
router.get('/users/:id', verifyUser, getUserById);


export default router;