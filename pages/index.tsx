import React from "react";
import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
  { id: 1, text: "1", color: "red", checked: false},
  { id: 2, text: "2", color: "orange", checked: true},
  { id: 3, text: "3", color: "red", checked: false},
];

const app: NextPage = () => {
  return <TodoList todos={todos} />;
};

export default app;