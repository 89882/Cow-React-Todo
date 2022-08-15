import React , { useState, useEffect}from "react";
import TodoItem from "./TodoItem";
import axios from"axios";

function TodoList(props){
    const change=props.change;
    const setChange=props.setChange;
    const filter=props.filter;
    const [items , setItems] =useState([]);
    const url="http://localhost:5000/todo";
    useEffect(()=>{
        axios.get(url).then(function(response){
        setItems(response.data);
        console.log("보여주기 성공");
    })
    .catch(function(error){
        console.log("보여주기 실패");
        console.log(error);
    })
    },[change]);
    //업데이트로 인한 렌더링이 될때마다 보여지는거 
    //수정, 삭제, value값 추가 모두 항목 조회랑 연관있는 업데이트이기에 빈 배열을 없애면 안에 setItem이 있어서 item 변경으로 무한 렌더링이된다
    return(
        <div className="todoList"><ul>{items.map((item)=><TodoItem key={item.id} item={item} change={change} setChange={setChange} filter={filter} ></TodoItem>)}</ul></div>
    );
}

export default TodoList;