import React from "react";

function TodoButtom(){
    return(
        <div className='buttom'>
            <div className='date'>
                2022년 8월 6일
            </div>
            <ul className='ulButtom'>
                <li><button className='ButtomButton'>All</button>
                </li>
                <li>
                <button className='ButtomButton'>Active</button>
                </li>
                <li>
                <button className='ButtomButton'>Completed</button>
                </li>
            </ul>
        </div>
    );
}

export default TodoButtom;