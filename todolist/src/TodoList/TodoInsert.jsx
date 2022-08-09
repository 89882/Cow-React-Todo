import React ,{useState, useCallback} from "react";
import axios from 'axios';

function TodoInsert(){
    const url="http://localhost:5000/todo";
    const [value , setValue] = useState('');
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[]);
    //변화가 일어났을 때 post로 정보를 추가한다

const onSubmit = useCallback(e=>{
    setValue('');
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
},[value]);
    return(
            <form className='insert'>
                <input onChange={onChange} value={value}size="100" type="text"className='insertInput' placeholder="what needs to be done?"/>
                <button onClick={onSubmit}className='insertButton'> +</button>
            </form>
    );
}

export default TodoInsert;