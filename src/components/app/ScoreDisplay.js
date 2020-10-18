import React from 'react';

export default function ScoreDisplay({score, resetCallback}) {
    return (
        <div className="wpmReset">
            <span className="score">Average Speed: {score.speed || 0} wpm</span>
            <span className="score">Accuracy: {score.accuracy || 0}%</span>
            <span className="score">Highest speed: {score.hightestSpeed || 0} wpm</span>
            <span className="score">Lowest speed: {score.lowestSpeed || 0} wpm</span>
            <span className="score">Rounds: {score.noOfRounds || 0}</span>
            <input className="reset-score" type="submit" onClick={resetCallback} value="reset" />
        </div>
    )
}