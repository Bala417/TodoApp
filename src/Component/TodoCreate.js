import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const TodoCreate = ({ todoInput }) => {
  const [todoAdd, setTodoAdd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    todoInput(todoAdd);
    setTodoAdd("");
  };
  return (
    <div className="todoform-container">
      <div className="create-form">
        <Form onSubmit={handleSubmit}>
          <Form.Label>
            <Form.Control
              required
              value={todoAdd}
              onChange={(e) => setTodoAdd(e.target.value)}
            />
          </Form.Label>
          <Button type="submit">Add</Button>
        </Form>
      </div>
    </div>
  );
};

export default TodoCreate;
