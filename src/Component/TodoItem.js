import React from "react";
import editIcon from "../icons/pen-to-square-solid.svg";
import deleteIcon from "../icons/delete.png";

const TodoItem = ({
  todo,
  isEdit,
  setIsEdit,
  setCurrdata,
  todoList,
  setTodoList,
}) => {
  const handleDelete = () => {
    const todoDelete = todoList.filter((item) => item.id !== todo.id);
    setTodoList(todoDelete);
  };
  return (
    <div className="item-container">
      <h3>{todo.todo}</h3>
      <img
        src={editIcon}
        alt="edit"
        className="editIcon"
        onClick={() => {
          setIsEdit(!isEdit);
          setCurrdata(todo);
        }}
      />
      <img
        src={deleteIcon}
        alt="delete"
        className="deleteIcon"
        onClick={handleDelete}
      ></img>
    </div>
  );
};

export default TodoItem;
