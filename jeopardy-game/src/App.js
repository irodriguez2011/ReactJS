import React, { useState } from 'react';
import './App.css';
import ScoreBtns from './components/game-score-buttons';
import Questions from './components/question-category-points';



function App() { 
  const [question, setQuestions] = useState([])
  const [answers,setAnswers]= useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [category, setcategory] = useState('')
  const [score,setScore] = useState(0)
  const [points,setPoints] = useState(0)
  

 function fetchQuestions() {  

     fetch('http://jservice.io/api/random')
    .then((response) => {
      return response.json();
    }).then ((data) => {  
       setQuestions( data[0].question)
       setAnswers(data[0].answer)
       setcategory(data[0].category['title'])
       setPoints(data[0].value)
       setIsLoaded(true)
    })
     setIsLoaded(false)
     setShowAnswer(false)
  }

function getAnswer() {
    setShowAnswer(true)
}

function handleReset() {
   setScore(0)

}

function handleScoreChange(success) {
    if (success) {
       setScore(score + points)
    } else {
      setScore(Math.max(score - points, 0))
    }
}


  return (
    <section> 
    <div className="gameBoard">
    <h1> Let's Play <span className="jeopardyLetters"> JEOPARDY!</span></h1>
   <div>  <button className="getQuestionsbtn" onClick={fetchQuestions}>  Get Questions</button> </div>
    <Questions points={points} category={category} />
      <p className="questionPara"> {question} </p>
      <div className="answers" onClick={getAnswer}>  { !isLoaded ? ''  : <p>  {showAnswer ? answers : 'Click to get answer!'}   </p> } </div>

   <ScoreBtns onReset={handleReset} score= {score} onScoreChange={handleScoreChange} /> 

     
    

    </div>
    </section>
  );


 }




export default App;
