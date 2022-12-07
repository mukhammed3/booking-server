import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotelController.js";
import Hotel from "../models/Hotel.js";
//controllers
import { createError } from "../utils/error.js";
//utils
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//!Create
router.post("/", verifyAdmin, createHotel);

//!Update
router.put("/:id", verifyAdmin, updateHotel);

//!Delete
router.delete("/:id", verifyAdmin, deleteHotel);

//!Get (for specific one)
router.get("/find/:id", getHotel);

//!Get all
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
