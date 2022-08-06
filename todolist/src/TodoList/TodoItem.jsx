import React from "react";
import check from "./check.png";

function TodoItem(){
    return(
            <li className='todoItem'>
                <button className="checkButton"><img className='checkImg' src={check}></img>
                </button>
                <div className='todoItemText'>test</div>
                <button className='deleteButton'>X</button>
            </li>
    );
}

export default TodoItem;