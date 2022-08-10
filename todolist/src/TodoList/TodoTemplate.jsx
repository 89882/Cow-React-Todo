import React , {useState} from "react";
import TodoInsert from './TodoInsert';
import TodoList from'./TodoList';
import TodoButtom from'./TodoButtom';

function TodoTemplate(){
    const [value , setValue] = useState('');
    //value가 바뀔 때 마다 다시 렌더링 하게 됨
    console.log("이거"+value);
return(
    <div>
        <div className='todoListFont'>Todo List</div>
        <div className='template'>
            <TodoInsert  value={value} setValue={setValue}></TodoInsert>
            <TodoList value={value} ></TodoList>
            <TodoButtom></TodoButtom>
        </div>
    </div>        
);
}

export default TodoTemplate;