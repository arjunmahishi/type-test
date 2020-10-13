import { wordStates } from "./wordOperations";

var speed = 0;
var noOfRounds = 0;
var highestSpeed = 0;
var lowestSpeed = 99999;

export const calculateScore = (wordObjs, timeTaken) => {
    let speed = calculateSpeed(wordObjs.length, timeTaken)
    let accu = calculateAccuracy(wordObjs)
    return {
        speed: speed,
        accuracy: accu,
        hightestSpeed: highestSpeed,
        lowestSpeed: lowestSpeed,
        noOfRounds: ++noOfRounds,
    }
}

export const resetScore = () => {
    speed = 0
    noOfRounds = 0
    highestSpeed = 0
    lowestSpeed = 99999
}

const calculateSpeed = (noOfWords, sec) => {
    let newSpeed = Math.round((noOfWords/sec)*60)
    let avgSpeed = speed === 0 ? newSpeed : Math.round((speed + newSpeed)/2)
    speed = avgSpeed
    highestSpeed = newSpeed > highestSpeed ? newSpeed : highestSpeed
    lowestSpeed = newSpeed < lowestSpeed ? newSpeed : lowestSpeed
    return avgSpeed
}

const calculateAccuracy = (wordObjs) => 100 * (
    wordObjs.filter(obj => obj.state === wordStates.CORRECT).length / wordObjs.length
)
