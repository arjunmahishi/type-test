var speed = 0;

export const calculateSpeed = (words, sec) => {
    let newSpeed = Math.round((words/sec)*60)
    let avgSpeed = speed === 0 ? newSpeed : Math.round((speed + newSpeed)/2)
    speed = avgSpeed
    return avgSpeed
}
