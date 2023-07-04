import express from "express";
import {
  getUsers,
  getUserById,
  creatUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";
const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", creatUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
