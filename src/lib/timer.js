var startTime = 0;

export const startTimer = () => {
    startTime = Date.now()
    console.info("started time")
}

export const stopTimer = () => {
    let durationInMs = Date.now() - startTime
    startTime = 0
    console.info("stopped time")
    return durationInMs/1000
}