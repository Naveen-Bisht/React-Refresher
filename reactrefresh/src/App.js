import React, { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/AddGoal/NewGoal";
import ResetGoal from "./components/ResetGoal/ResetGoal";


/*class App extends React.Component{
  render(){
    return <h1>Hi There</h1>;
  }
}*/

/*function App(){
  return <h1>Hi</h1>
}*/

const App = () => {
  /*const coursegoals = [
    {id:1, name:'JavaScript'},
    {id:2, name:'React'},
    {id:3, name:'React Native'}
  ];*/
  const [coursegoals, setGoal] = useState([
    { id: 1, name: "JavaScript" },
    { id: 2, name: "React" },
    { id: 3, name: "React Native" },
  ]);

  const addNewGoalHandler = newGoal =>{
    //coursegoals.push(newGoal);
    //setGoal(coursegoals.concat(newGoal));
    setGoal((prevGoalState) => {
      return prevGoalState.concat(newGoal);
    });
    console.log(coursegoals);
  };
  const resetGoalHandler = goalId => {
    //console.log(goalId);
    setGoal([]);
  };
  /*const deleteGoalHandlerr = deleteGoal => {
    setGoal([]);
  };*/
  return (
    <div className="learning-goals">
      <h1>Learning Goal Q2:</h1>
      <NewGoal addGoal={addNewGoalHandler}/>
      <ResetGoal resetGoal={resetGoalHandler} />
      <GoalList goal={coursegoals} />
    </div>
  );
};

export default App;
