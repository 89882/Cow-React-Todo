import React ,{useCallback} from "react";
import check from "./check.png";
import axios from "axios";

function TodoItem({item}){
    const{id , content , isCompleted , ...other} = item;
    const Delete=useCallback((e)=>{
        console.log(item.isCompleted);
        console.log(item.id);
        const id=item.id;
        axios.delete("http://localhost:5000/todo/"+id).then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
    });
    return(
            <li className='todoItem'>
                <button className="checkButton"><img className='checkImg' src={check}></img>
                </button>
                <div className='todoItemText'>{content}</div>
                <button onClick={Delete} className='deleteButton'>X</button>
            </li>
    );
}

export default TodoItem;