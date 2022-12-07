import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and u can delete ur acc");
// });

// router.get("/ckeckadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello POVELITEL, you are logged in and u can delete ALL acc");
// });
//!Update
router.put("/:id", verifyUser, updateUser);

//!Delete
router.delete("/:id", verifyUser, deleteUser);

//!Get (for specific one)
router.get("/:id", verifyUser, getUser);

//!Get all
router.get("/", verifyAdmin, getUsers);

export default router;
