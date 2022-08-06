import React from "react";
function TodoInsert(){
    return(
            <form className='insert'>
                <input size="100" type="text"className='insertInput' placeholder="what needs to be done?"/>
                <button className='insertButton'> +</button>
            </form>
    );
}

export default TodoInsert;