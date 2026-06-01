import mongoose, { Schema } from "mongoose";

export interface ITodo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

const TodoSchema = new Schema<ITodo>({
  title: {
    type: String,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model<ITodo>("Todo", TodoSchema);

export default Todo;