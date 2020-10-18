import { calculateSpeed, getSpeedArr } from '../lib/score';
import { getRandomWords, evaluateTypedWords, wordStates, breakText} from '../lib/wordOperations';

test("evaluateTypedWords", () => {
    let wordObjs = evaluateTypedWords("", "")
    expect(wordObjs.length).toBe(0)
})

test("evaluateTypedWords", () => {
    let wordObjs = evaluateTypedWords("test1 test2", breakText("test1 test2"))
    wordObjs.forEach(word => {
        expect(word.state).toBe(wordStates.CORRECT)    
    });
})

test("evaluateTypedWords", () => {
    let wordObjs = evaluateTypedWords("test", breakText("tast"))
    expect(wordObjs[0].state).toBe(wordStates.CORRECT)
    expect(wordObjs[1].state).toBe(wordStates.WRONG)
})


test("evaluateTypedWords", () => {
    let wordObjs = evaluateTypedWords("test1 test2", breakText(""))
    expect(wordObjs[0].state).toBe(wordStates.INACTIVE)
    expect(wordObjs[1].state).toBe(wordStates.INACTIVE)
})

test("getRandomWords", () =>  {
    expect(getRandomWords(0).length).toBe(0)
    expect(getRandomWords(3).split(" ").length).toBe(3)
})

test("getSpeedArr", () =>  {
    expect(getSpeedArr()).toMatchObject([])
})

test("getSpeedArr", () =>  {
    calculateSpeed(5, 5)
    expect(getSpeedArr()).toMatchObject([60])
    calculateSpeed(5, 5)
    expect(getSpeedArr()).toMatchObject([60, 60])
    calculateSpeed(5, 5)
    expect(getSpeedArr()).toMatchObject([60, 60, 60])
})