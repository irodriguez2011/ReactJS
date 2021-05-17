import './App.css';
import React,{useState} from 'react';
import Grocery from './grocery';


function App() {

  /*
  const [list,setList] = useState(itemList)
  const [inputData,setInputData] = useState(initialState)
*/


  return (
    <div className="">
      <h1> Grocery List</h1>
       <Grocery /> 
    </div>
  );
}

export default App;
