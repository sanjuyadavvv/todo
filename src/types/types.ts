export type Todo={
    _id:string,
    title:string,
    description:string,
    completed:boolean,
    createdAt: string;
}

export type CreateTodoPayload = {
  title: string;
  description: string;
  completed?: boolean;
};