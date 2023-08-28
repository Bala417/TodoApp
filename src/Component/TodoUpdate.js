import React, { useState } from "react";

const TodoUpdate = ({ isEdit, setIsEdit, todoList, setTodoList, editId }) => {
  const [updateInput, setUpdateInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTodoList = todoList.map((todo) =>
      todo.id === editId ? { ...todo, todo: updateInput } : todo
    );

    setTodoList(updatedTodoList);
    setUpdateInput("");
    setIsEdit(!isEdit);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoUpdate">
          <input
            type="text"
            value={updateInput}
            id="todoUpdate"
            onChange={(e) => {
              setUpdateInput(e.target.value);
            }}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default TodoUpdate;
