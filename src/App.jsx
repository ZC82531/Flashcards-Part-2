import './App.css';
import Flashcard from './flashcard';
import { useState } from 'react';
import amendments from './amendments.json'

const App = () => {

  const [currentIndex, setIndex] = useState(0);
  const [currentState, setState] = useState(false);
  const [currentAnswer, setAnswer] = useState(0);
  const [isCorrect, setCorrect] = useState(0);

  function increaseIndex() {
    if (currentIndex<amendments.length-1){
      setState(false);
      setIndex(currentIndex+1);
      setCorrect(0);
      document.getElementById("form").value = "";
    }
  }
  function decreaseIndex() {
    if (currentIndex>0){
      setState(false);
      setIndex(currentIndex-1);
      setCorrect(0);
      document.getElementById("form").value = "";
    }
  }

  function setCondition() {
    setState(!currentState);
  }

  function checkValidity(e) {
    e.preventDefault();
    if (amendments[currentIndex].Amendment === parseInt(currentAnswer)){
      setCorrect(1);
    }
    else {
      setCorrect(2);
    }
  }

  function newAnswer(entry) {
    setAnswer(entry.target.value);
  }

  return (
    <div className="App">
      <div>
        <h1>
          Guess the Amendment
        </h1>
        <p>
          How well do you know the Amendments of the Constitution?
        </p>
        <p>Number of cards: {amendments.length}</p>
      </div>
      <div onClick={setCondition}>
      <Flashcard side={currentState} index={currentIndex} />
      </div>
      <div>
        <form onSubmit ={checkValidity}>
          <label>Amendment: </label>
          <input id="form" name="number" onChange={newAnswer} placeholder="Guess the Amendment" type="text" style={{
            borderColor: isCorrect === 0 ? 'transparent' : isCorrect === 1 ? 'green' : 'red',
          }} />
          <input type="submit"/>
        </form>
      </div>
      <button onClick={decreaseIndex}>Prev</button>
      <button onClick={increaseIndex}>Next</button>
    </div>
  )
}

export default App