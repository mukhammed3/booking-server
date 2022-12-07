//libs
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
//files
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
const app = express();
dotenv.config("../.env");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("DB✨ ");
  } catch (error) {
    throw error;
    console.log("Error on DB");
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("DB is disconnected");
});

//*middles
app.use(cors());
app.use(cookieParser());

// активируем отправления для локалазоста
app.use(express.json());

// when we will use this route it's will open this function
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomsRoute);

//error middle ♥
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    succees: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const PORT = 8800;
app.listen(PORT, () => {
  connect();
  console.log(`Connected to backend on ${PORT}`);
});
