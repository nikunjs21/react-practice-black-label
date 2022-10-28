import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);

  const todoRef = useRef();

  const { id } = useParams();
  console.log(id);

  const addTodo = (value) => {
    console.log("TODO TASK: ", value);
    const arr = [
      ...todoList,
      {
        id: new Date().getTime(),
        value: value,
      },
    ];
    setTodoList(arr);

    // setTodoList((prevValue) => {
    //   return [...prevValue, value];
    // });
  };

  const deleteTodo = (id) => {
    const index = todoList.findIndex((e) => e.id === id);
    const tempList = [...todoList];
    tempList.splice(index, 1);
    setTodoList(tempList);
  };

  return (
    <>
    <Button onClick={() => {
        todoRef.current.value = new Date().getTime();
        // console.log("run");
    }}>Set Val Input Ref</Button>
    <Button onClick={() => {
        todoRef.current.resetAll();
    }}>Reset All</Button>
      <TodoForm ref={todoRef} addTodo={addTodo} />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </>
  );
};

export default TodoApp;
