import { Router } from "express";
import { createTodoController,deleteTodoController,updateTodoController,getall } from "../controllers/todo.controller.js";

const router=Router()
router.get('/get',getall)
router.post('/create',createTodoController)

router.put('/update/:id',updateTodoController)

router.delete('/delete/:id',deleteTodoController)

export default router 
