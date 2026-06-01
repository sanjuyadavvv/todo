import express from "express";
import dotenv from "dotenv"
import connectdb from './db.js'
import cors from "cors"
import TodoRoutes from './todo/index.js'
const app=express()
app.use(express.json());
dotenv.config()
connectdb()

app.use(cors())
app.use(
  cors({
    origin: "http://localhost:5175",
    credentials: true,
  })
);
const PORT=process.env.PORT
app.get('/',(req,res)=>{
    res.send('listening to sanju ')
})


app.use('/todo',TodoRoutes)
app.listen(PORT,()=>{
console.log(`server is running on ${PORT}`)
})