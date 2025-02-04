import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import userRouter from "./routes/userRoute.js";
import cors from "cors";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import productRouter from "./routes/productRoute.js";
import connectCloudinary from "./cloudinary.js";
const app = express();
dotenv.config();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
  res.send("hello i am root new");
})
app.get('/github/api',(req,res)=>{

  const data=axios.get('https://github.com/ravinder9280/Chatty/commit/0208f0ca66489a68723702a7ced4d07e001c461d.diff')

  res.json({data})

})

app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/product", productRouter);

app.listen(PORT, () => {
  console.log(`server is working on local machine http://localhost:${PORT}/`);
  connectDB();
  connectCloudinary()
});
