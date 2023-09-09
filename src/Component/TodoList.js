import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoCreate from "./TodoCreate";
import TodoUpdate from "./TodoUpdate";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currdata, setCurrdata] = useState("");

  const id = crypto.randomUUID();

  const todoInput = (todoAdd) => {
    setTodoList([...todoList, { todo: todoAdd, id }]);
  };

  return (
    <div className="todoList-container">
      <h1 className="title">Todo App</h1>
      <TodoCreate todoInput={todoInput} />
      {isEdit && (
        <TodoUpdate
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          todoList={todoList}
          setTodoList={setTodoList}
          currdata={currdata}
          setCurrdata={setCurrdata}
        />
      )}

      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoItem
              todo={todo}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              setCurrdata={setCurrdata}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
