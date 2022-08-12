import React from "react";
import check from "./check.png";

function CompletedButton(props){
    const complete = props.complete;
    const Completed= props.Completed;


    if(complete===false){
        return(<button onClick={Completed}className="checkButton2"><img className='checkImg' src={check}></img>
        </button>);
    }
    else if(complete === true){return(<button onClick={Completed} className="checkButton"><img className='checkImg' src={check}></img>
    </button>);
    }

}

export default CompletedButton;

