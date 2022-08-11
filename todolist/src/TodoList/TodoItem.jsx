import React ,{useCallback} from "react";
import check from "./check.png";
import axios from "axios";

function TodoItem(props){
    const  item  = props.item;
    const change=props.change;
    const setChange=props.setChange;
    const Delete=useCallback((e)=>{
        console.log(item.isCompleted);
        console.log(item.id);
        const id=item.id;
        axios.delete("http://localhost:5000/todo/"+id).then(function(response){
            console.log(response);
            setChange(change+1);
            
        })
        .catch(function(error){
            console.log(error);
        })
    });
    const Completed=useCallback((e)=>{
        console.log(item.isCompleted);
        const id=item.id;
        const status=item.isCompleted;
        console.log("아이디는"+id);
        console.log("상태는"+status);
        axios.patch("http://localhost:5000/todo/status/"+id).then(function(response){
            console.log(response); 
            setChange(change+1); 
        })
        .catch(function(error){
            console.log(error);
        })
    });
    return(
            <li className='todoItem'>
                {item.isCompleted===false&&<button onClick={Completed}className="checkButton2"><img className='checkImg' src={check}></img>
                </button>}
                {item.isCompleted===true&&<button onClick={Completed} className="checkButton"><img className='checkImg' src={check}></img>
                </button>}
                <div className='todoItemText'>{item.content}</div>
                <button onClick={Delete} className='deleteButton'>X</button>
            </li>
    );
}

export default TodoItem;