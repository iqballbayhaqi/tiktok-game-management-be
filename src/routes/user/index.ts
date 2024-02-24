import express from "express";
import { PrismaClient } from '@prisma/client';
import UserController from "../../controllers/user";

const router = express.Router();

router.get("/", UserController.showAllUser);
router.post('/', UserController.addUser)
router.patch('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)

export default router;