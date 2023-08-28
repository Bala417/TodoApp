import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoCreate from "./TodoCreate";
import TodoUpdate from "./TodoUpdate";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const id = crypto.randomUUID();

  const todoInput = (todoAdd) => {
    setTodoList([...todoList, { todo: todoAdd, id }]);
  };

  return (
    <div>
      <TodoCreate todoInput={todoInput} />
      {isEdit && (
        <TodoUpdate
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          todoList={todoList}
          setTodoList={setTodoList}
          editId={editId}
        />
      )}

      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoItem
              todo={todo}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              setEditId={setEditId}
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
