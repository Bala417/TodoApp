import React from "react";
import editIcon from "../icons/pen-to-square-solid.svg";
import deleteIcon from "../icons/delete.png";

const TodoItem = ({
  todo,
  isEdit,
  setIsEdit,
  setEditId,
  todoList,
  setTodoList,
}) => {
  const handleDelete = () => {
    const todoDelete = todoList.filter((item) => item.id !== todo.id);
    setTodoList(todoDelete);
  };
  return (
    <div>
      <>
        <h1 style={{ display: "inline", paddingRight: "10px" }}>{todo.todo}</h1>
        <img
          src={editIcon}
          alt="edit"
          style={{ width: "24px", height: "24px", paddingRight: "10px" }}
          onClick={() => {
            setIsEdit(!isEdit);
            setEditId(todo.id);
          }}
        />
        <img
          src={deleteIcon}
          alt="delete"
          style={{ width: "24px", height: "24px", paddingRight: "10px" }}
          onClick={handleDelete}
        ></img>
      </>
    </div>
  );
};

export default TodoItem;
