import { getRandomWords, evaluateTypedWords, wordStates} from '../lib/wordOperations';

test("evaluateTypedWords", () => {
    let wordObjs = evaluateTypedWords([], [])
    expect(wordObjs.length).toBe(0)
})

test("evaluateTypedWords", () => {
    let wordObjs = evaluateTypedWords(["test1", "test2"], ["test1", "test2"])
    expect(wordObjs.length).toBe(2)
    wordObjs.forEach(word => {
        expect(word.state).toBe(wordStates.CORRECT)    
    });
})

test("evaluateTypedWords", () => {
    let wordObjs = evaluateTypedWords(["test1"], ["test2"])
    expect(wordObjs[0].state).toBe(wordStates.WRONG)

})

test("evaluateTypedWords", () => {
    let wordObjs = evaluateTypedWords(["test1", "test2"], ["", "test2"])
    expect(wordObjs[0].state).toBe(wordStates.WRONG)
    expect(wordObjs[1].state).toBe(wordStates.CORRECT)
})


test("evaluateTypedWords", () => {
    let wordObjs = evaluateTypedWords(["test1", "test2"], [])
    expect(wordObjs[0].state).toBe(wordStates.INACTIVE)
    expect(wordObjs[1].state).toBe(wordStates.INACTIVE)
})

test("getRandomWords", () =>  {
    expect(getRandomWords(0).length).toBe(0)
    expect(getRandomWords(3).length).toBe(3)
})