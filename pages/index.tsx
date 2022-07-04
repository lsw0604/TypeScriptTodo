import React from "react";
import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";
import { wrapper } from "../store";

interface IProps {
  todos: TodoType[];
}

const app: NextPage<IProps> = ({ todos }) => {
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    console.log("store", store);
    try {
      const { data } = await getTodosAPI();
      return { props: { todos: data } };
    } catch (e) {
      console.log(e);
      return { props: { todos: [] } };
    }
  }
);

export default app;