import React from "react";
import "./Listitem.module.css";

const ListItem = (props) => {
  const { itemName, id, deleteTodo } = props;

  const onDeleteHandler = () => {
    console.log("ID: ", id);
    deleteTodo(id);
  };

  return (
    <div className="card" onClick={onDeleteHandler}>
      {itemName}
    </div>
  );
};

export default ListItem;
