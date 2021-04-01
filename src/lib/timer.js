var startTime = 0;

export const startTimer = () => {
    startTime = Date.now()
}

export const stopTimer = () => {
    let durationInMs = Date.now() - startTime
    startTime = 0
    return durationInMs/1000
}
