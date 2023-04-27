import React from "react";
import './ResetGoal.css';

const ResetGoal = props =>{
    const resetEvent = event => {
        event.preventDefault();
        props.resetGoal([]);
    };
    return(
        <form className="reset-goal" onSubmit={resetEvent}>
            <button>Reset</button>
        </form>
    )
}

export default ResetGoal;