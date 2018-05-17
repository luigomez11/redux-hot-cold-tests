import {GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess} from './action';

describe('generateAuralUpdate', () => {
    it('should return the action', () => {
        const action = GENERATE_AURAL_UPDATE();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});

describe('restartGame', () => {
    it('should return the action', () => {
        const correctAnswer = 10;
        const action = RESTART_GAME(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});

describe('makeGuess', () => {
    it('should return the action', () => {
        const guess = 1;
        const action = MAKE_GUESS(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});