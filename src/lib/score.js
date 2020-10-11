import { wordStates } from "./wordOperations";

var speed = 0;

export const calculateScore = (wordObjs, timeTaken) => {
    let speed = calculateSpeed(wordObjs.length, timeTaken)
    let accu = calculateAccuracy(wordObjs)
    return {
        speed: speed,
        accuracy: accu,
    }
}

const calculateSpeed = (noOfWords, sec) => {
    let newSpeed = Math.round((noOfWords/sec)*60)
    let avgSpeed = speed === 0 ? newSpeed : Math.round((speed + newSpeed)/2)
    speed = avgSpeed
    return avgSpeed
}

export const calculateAccuracy = (wordObjs) => 100 * (
    wordObjs.filter(obj => obj.state === wordStates.CORRECT).length / wordObjs.length
)