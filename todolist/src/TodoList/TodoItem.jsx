import React ,{useState,useCallback} from "react";
import axios from "axios";
import CompletedButton from "./CompletedButton";
import EditText from "./EditText";


function TodoItem(props){
    const[edit , setEdit]=useState(true);
    const [editvalue, setEditValue]= useState('');
    const  item  = props.item;
    const complete = item.isCompleted;
    const content = item.content;
    const change=props.change;
    const setChange=props.setChange;
    const filter=props.filter;


    const Delete=useCallback((e)=>{
        console.log(item.isCompleted);
        console.log(item.id);
        const id=item.id;
        axios.delete("http://localhost:5000/todo/"+id).then(function(response){
            console.log(response);
            setChange(change+1);
            console.log("삭제");
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


    const Edit=useCallback((e)=>{
        setEdit(!edit);
        //여기서는 연필 버튼을 누른거기에 true인 edit이 false로 바뀐다
        setChange(change+1);
        //그러면 이제 change가 일어났으니까 화면 렌더링 즉 수정할 애는 비어있게 렌더링
    }); //수정하려고 버튼을 눌렀을 때


    const Finish = useCallback((e)=>{
        if(e.key==='Enter'){    const id=item.id;
            axios.patch("http://localhost:5000/todo/"+id,{"content":editvalue})
            .then(function(response){
                console.log("수정 성공");
                console.log(response);
                setEdit(!edit);
                //그러면 이제 false여서 수정으로 보였던 게 true가 되면서 연필로 다시 보인다
                setChange(change+1);
                //true가 되어서 다시 화면 렌더링하면 정상적으로 보일것이다
                setEditValue('');
            })
            .catch(function(error){
                console.log("수정 실패");
                console.log(error);
            })}
        
    });


    const Change=useCallback((e)=>{
        setEditValue(e.target.value);
    });

    
    if(filter==='all'){
        return(
        <li className='todoItem'>
            <CompletedButton complete ={complete} Completed={Completed}></CompletedButton>
            <EditText Edit={Edit} edit ={edit}content={content} Finish={Finish} Change={Change} editvalue={editvalue}></EditText>
            {<button onClick={Delete} className='deleteButton'>X</button>}
        </li>
);
}//filter가 all일때

else if(filter==='active'){
    if(item.isCompleted===false){
        return(
        <li className='todoItem'>
            <CompletedButton complete ={complete} Completed={Completed}></CompletedButton>
            <EditText Edit={Edit} edit ={edit} content={content} Finish={Finish}  Change={Change} editvalue={editvalue}></EditText>
            <button onClick={Delete} className='deleteButton'>X</button>
        </li>
);}
}//filter가 active일때

else if(filter==='completed'){
    if(item.isCompleted===true){
        return(
        <li className='todoItem'>
            <CompletedButton complete ={complete} Completed={Completed}></CompletedButton>
            <EditText Edit={Edit} edit ={edit} content={content} Finish={Finish}  Change={Change} editvalue={editvalue}></EditText>
            <button onClick={Delete} className='deleteButton'>X</button>
        </li>
);}// filter가 completed일때
}
}

export default TodoItem;