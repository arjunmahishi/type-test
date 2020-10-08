var startTime = 0;

export const startTimer = () => {
    startTime = Date.now()
}

export const stopTimer = () => {
    let duration = Date.now() - startTime
    startTime = 0
    return duration
}