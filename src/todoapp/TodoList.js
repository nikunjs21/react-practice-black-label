import React from "react";
import ListItem from "./ListItem";

const TodoList = (props) => {
  const { todoList, deleteTodo } = props;

  return todoList.map((value) => {
    return (
      <>
        <ListItem
          deleteTodo={deleteTodo}
          key={value.id}
          id={value.id}
          itemName={value.value}
        />
      </>
    );
  });
};

export default TodoList;
