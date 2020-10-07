import { words } from './words'

// Returns a string with random words 
export const getRandomWords = (length) => {
    let arr = [];
    while (length--) { 
        arr.push(words[Math.floor(Math.random() * words.length)])
    }
    return arr
}
