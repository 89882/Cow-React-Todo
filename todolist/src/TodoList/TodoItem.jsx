import React from "react";
import check from "./check.png";

function TodoItem({item}){
    const{id , content , isCompleted , ...other} = item;
    return(
            <li className='todoItem'>
                <button className="checkButton"><img className='checkImg' src={check}></img>
                </button>
                <div className='todoItemText'>{content}</div>
                <button className='deleteButton'>X</button>
            </li>
    );
}

export default TodoItem;