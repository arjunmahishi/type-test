import { words } from './wordBank'

export const wordStates = {
    CORRECT: "correct",
    WRONG: "wrong",
    INACTIVE: "inactive",
}

// Returns a string with random words 
export const getRandomWords = (length) => {
    let arr = [];
    while (length--) { 
        arr.push(words[Math.floor(Math.random() * words.length)])
    }
    return arr
}

export const evaluateTypedWords = (displayedWords, typedWords) => displayedWords.map((word, i) => {
    let wordObj = {value: word, state: null}
    if (i < typedWords.length) {
        wordObj.state = typedWords[i] === word ?
            wordStates.CORRECT : wordStates.WRONG
        return wordObj
    }
    wordObj.state = wordStates.INACTIVE
    return wordObj
})

export const breakText = (text) => text.split(' ').filter(ele => ele !== '');