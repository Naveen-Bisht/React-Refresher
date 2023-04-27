import React, {useState} from "react";
import "./NewGoal.css";

const NewGoal = props => {
  let [userInput, setInput] = useState('');
  const addGoalEvent = event => {
    event.preventDefault();
    if(userInput.length > 0)
    {
      const newGoal = {
        id: Math.random(),
        name: userInput
    };
    props.addGoal(newGoal);
    setInput('');
  }
  };
  const editText = event =>{
    setInput(event.target.value);
  };
  return (
    <div>
      <h2>Add new goal:</h2>
      <form className="new-goal-form" onSubmit={addGoalEvent}>
        <input type="text" value={userInput} onChange={editText}/>
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
};

export default NewGoal;
