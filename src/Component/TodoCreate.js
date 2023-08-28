import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const TodoCreate = ({ todoInput }) => {
  const [todoAdd, setTodoAdd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    todoInput(todoAdd);
    setTodoAdd("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            required
            value={todoAdd}
            onChange={(e) => setTodoAdd(e.target.value)}
          />
        </label>
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default TodoCreate;
