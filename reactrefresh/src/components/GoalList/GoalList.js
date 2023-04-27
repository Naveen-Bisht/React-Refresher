import React from "react";
import "./GoalList.css";

/*const GoalList = () => {
  return (
    <ul className="goal-list">
      <li>Javascript</li>
      <li>React</li>
      <li>React Native</li>
    </ul>
  );
};*/

const GoalList = (props) => {
  
  const deleteEvent = event =>{
    let value = event.target.value;
    console.log(value);
    //props.goal.slice(value,1);
    //props.goal(event.id);
  };
  return (
    <div>
      <ul className="goal-list">
        {props.goal.map((item) => {
          return (
            <li key={item.id}>
              {item.name}
              <button className="delete-goal" value={item.id} onClick={deleteEvent}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GoalList;
