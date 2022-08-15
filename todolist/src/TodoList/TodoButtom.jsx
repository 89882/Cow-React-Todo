import React ,{useCallback}from "react";

function TodoButtom(props){
    const change=props.change;
    const setChange=props.setChange;
    const filter=props.filter
    const all=useCallback(()=>{
        filter.current="all";
        setChange(change+1);
    });
    const active=useCallback(()=>{
        filter.current="active";
        setChange(change+1);
    });
    const completed=useCallback(()=>{
        filter.current="completed";
        setChange(change+1);
    });

    return(
        <div className='buttom'>
            <div className='date'>
                2022년 8월 6일
            </div>
            <ul className='ulButtom'>
                <li><button onClick={all}className='ButtomButton'>All</button>
                </li>
                <li>
                <button onClick={active}className='ButtomButton'>Active</button>
                </li>
                <li>
                <button onClick={completed}className='ButtomButton'>Completed</button>
                </li>
            </ul>
        </div>
    );
}

export default TodoButtom;