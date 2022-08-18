import React from "react";
import pencil from "./pencil.png";

function EditText(props){
const content = props.content;
const handleFinish = props.handleFinish;
const handleChange= props.handleChange;
const editvalue = props.editvalue;
const edit = props.edit;
const handleEdit = props.handleEdit;

    if(edit===true){
        return(
            <div className='Edit'>
            <div className='todoItemText'>{content}</div>
            <button onClick={handleEdit} className='pencilButton'><img className='pencilImg' src={pencil} ></img></button>
            </div>
        );
    }
    else if(edit===false){
        return(
        <div className="Edit">
            <div className='todoItemText'><input className="editInput" onKeyPress={handleFinish} onChange={handleChange} value={editvalue} size="30"type="text" placeholder="수정하기"></input></div>
            <div className="finishButton"></div>
            </div>
    );
}
}

export default EditText;