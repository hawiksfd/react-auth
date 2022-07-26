import express from "express";
import { CreateUser, UpdateUser, DeleteUser, getUsers, getUserById } from "../controller/UsersContr.js"

const router = express.Router();

router.post('/users', CreateUser);
router.patch('/users/:id', UpdateUser);
router.delete('/users/:id', DeleteUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);


export default router;