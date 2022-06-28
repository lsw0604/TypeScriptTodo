import React from "react";
import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  { id: 1, text: "react Practice", color: "red", checked: false},
  { id: 2, text: "TypeScript Practice", color: "orange", checked: true},
  { id: 3, text: "Production Practice", color: "red", checked: false},
];

const app: NextPage = () => {
  return <TodoList todos={todos} />;
};

export default app;