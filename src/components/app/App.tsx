import React, { useState } from 'react';
import TextDisplay from './TextDisplay'
import '../../css/App.css'
import { calculateScore, resetScore } from "../../lib/score"
import { startTimer, stopTimer } from "../../lib/timer"
import { breakText, evaluateTypedWords, getRandomWords, wordStates } from '../../lib/wordOperations';
import ScoreDisplay from './ScoreDisplay';
import AppHeader from './AppHeader';

const numberOfWords = 5

const App = () => {
  const initialRandomWords = getRandomWords(numberOfWords) 
  const initialScore = {speed: 0, accuracy: 0} 

  const [typedText, setTypedText] = useState("")
  const [score, setScore] = useState(initialScore)
  const [randomWords, setRandomWords] = useState(initialRandomWords)
  const [wordObjs, setWordObjs] = useState(evaluateTypedWords(initialRandomWords, []))
  const [timerStarted, setTimerStarted] = useState(false)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!timerStarted) startTimer()
    setTimerStarted(true)

    const inputWords = breakText(e.target.value)
    const wordObjs = evaluateTypedWords(randomWords, inputWords)

    // check if the round is complete
    if (isComplete(wordObjs, inputWords)) {
      initNextRound(wordObjs)
      return
    }

    // if not, update the state
    setTypedText(e.target.value)
    setWordObjs(wordObjs)
  }

  const initNextRound = (wordObjs: any) => {
    setTypedText("")
    setRandomWords(initialRandomWords)
    setWordObjs(evaluateTypedWords(initialRandomWords, []))
    setScore(calculateScore(wordObjs, stopTimer(), numberOfWords))
    setTimerStarted(false)
  }

  const handleResetScore = () =>{
    setScore(initialScore)
    resetScore()
  }

  const isComplete = (wordsToDisplay: any, inputWords: Array<string>) =>
    inputWords.length > randomWords.length || 
    wordsToDisplay[wordsToDisplay.length-1].state === wordStates.CORRECT

  return (
    <>
      <AppHeader />
      <div className="App">
        <TextDisplay words={wordObjs} />
        <input
          aria-label="text-input"
          value={typedText}
          id="text-input"
          className="text-input"
          onChange={handleInput}
          autoFocus
        />
        <ScoreDisplay score={score} resetCallback={handleResetScore}/>
      </div>
    </>
  )
}

export default App;
