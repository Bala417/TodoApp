import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TodoUpdate = ({
  isEdit,
  setIsEdit,
  todoList,
  setTodoList,
  currdata,
  setCurrdata,
}) => {
  const [updateInput, setUpdateInput] = useState(currdata.todo);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTodoList = todoList.map((todo) =>
      todo.id === currdata.id ? { ...todo, todo: updateInput } : todo
    );

    setTodoList(updatedTodoList);
    setUpdateInput("");
    setIsEdit(!isEdit);
  };

  // <Form>
  //     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  //       <Form.Label>Email address</Form.Label>
  //       <Form.Control type="email" placeholder="name@example.com" />
  //     </Form.Group>
  //     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  //       <Form.Label>Example textarea</Form.Label>
  //       <Form.Control as="textarea" rows={3} />
  //     </Form.Group>
  //   </Form>
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="todoUpdate">
          <Form.Control
            type="text"
            value={updateInput}
            id="todoUpdate"
            onChange={(e) => {
              setUpdateInput(e.target.value);
            }}
          />
        </Form.Label>
        <Button type="submit">Update</Button>
      </Form>
    </div>
  );
};

export default TodoUpdate;
