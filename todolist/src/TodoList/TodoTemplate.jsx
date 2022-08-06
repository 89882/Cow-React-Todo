import React from "react";
import TodoInsert from './TodoInsert';
import TodoList from'./TodoList';
import TodoButtom from'./TodoButtom';
function TodoTemplate(){
return(
    <div>
        <div className='todoListFont'>Todo List</div>
        <div className='template'>
            <TodoInsert></TodoInsert>
            <TodoList></TodoList>
            <TodoButtom></TodoButtom>
        </div>
    </div>        
);
}

export default TodoTemplate;