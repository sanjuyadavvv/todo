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
    origin: ["http://localhost:5175",
      "http://localhost:5174",
      "http://localhost:5173",
      "http://localhost:5172",
      "http://localhost:5171",
      "http://localhost:5170",
      "http://localhost:3000",
    "http://100.31.106.11",
    ],
    credentials: true,
  })
);
const PORT=process.env.PORT
const port = Number(PORT) || 3000
app.get('/',(req,res)=>{
    res.send('listening to sanju ')
})


app.use('/todo',TodoRoutes)
app.listen(port,()=>{
console.log(`server is running on ${port}`)
})
