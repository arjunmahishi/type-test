import { startTimer, stopTimer } from '../controllers/timer';

test('test timer', async () => {
    startTimer()
    setTimeout(() => { }, 2000);
    let duration = stopTimer()
    expect(Math.abs(duration-200)).toBeLessThan(1)
})