import React from "react";
import pencil from "./pencil.png";

function EditText(props){
const content = props.content;
const Finish = props.Finish;
const Change= props.Change;
const editvalue = props.editvalue;
const edit = props.edit;
const Edit = props.Edit;

    if(edit===true){
        return(
            <div className='Edit'>
            <div className='todoItemText'>{content}</div>
            <button onClick={Edit} className='pencilButton'><img className='pencilImg' src={pencil} ></img></button>
            </div>
        );
    }
    else if(edit===false){
        return(
        <div className="Edit">
            <div className='todoItemText'><input className="editInput" onKeyPress={Finish} onChange={Change} value={editvalue} size="30"type="text" placeholder="수정하기"></input></div>
            <div className="finishButton"></div>
            </div>
    );
}
}

export default EditText;