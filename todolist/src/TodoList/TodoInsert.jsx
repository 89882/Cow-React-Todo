import React ,{useState, useCallback} from "react";
import axios from 'axios';

function TodoInsert(props){
    const value= props.value;
    const setValue=props.setValue;
    const url="http://localhost:5000/todo";
    //변화가 일어났을 때 post로 정보를 추가한다
const onChange = useCallback((e)=>{
setValue(e.target.value);
});
//입력하면 그 값을 value 에 넣어줌
const onSubmit = useCallback( (e)=>{
    e.preventDefault();
    axios.post(url,{"content":value})
    .then(function(response){
        console.log("성공");
        console.log(response);
    })
    .catch(function(error){
        console.log("실패");
        console.log(error);
    })
    setValue('');
});
//제출 버튼을 누르면 그 value값을 post해서 전송
    return(
            <form className='insert'>
                <input onChange={onChange} value={value} size="100" type="text"className='insertInput' placeholder="what needs to be done?"/>
                <button onClick={onSubmit}className='insertButton'> +</button>
            </form>
    );
}

export default TodoInsert;