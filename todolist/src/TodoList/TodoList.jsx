import React from "react";
import TodoItem from "./TodoItem";
function TodoList(){
    return(
        <div className="todoList"><ul><TodoItem></TodoItem></ul></div>
    );
}

export default TodoList;