import React from 'react';

export default function ScoreDisplay({score, resetCallback}) {
    return (
        <div className="wpmReset">
            <span className="score">Speed: {score.speed} wpm</span>
            <span className="score">Accuracy: {score.accuracy}%</span>
            <input className="reset-score" type="submit" onClick={resetCallback} value="reset" />
        </div>
    )
}