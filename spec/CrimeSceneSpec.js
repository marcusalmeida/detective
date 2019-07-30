import { CrimeScene, Theory } from '../src/CrimeScene';
import { CrimeSceneMaker } from '../src/CrimeSceneMaker';

const database = {
    suspects: ['Joker', 'Thanos',],
    places:   ['Gotham', 'Wakanda'],
    weapons : ['Hammer', 'Infinity Gunlet']
};

describe('CrimeScene', () => {
    it("should contains details about crime's scene", () => {
        const scene = new CrimeScene('Joker', 'Gotham', 'Hammer');

        expect(scene.suspect).toBe('Joker');
        expect(scene.place).toBe('Gotham');
        expect(scene.weapon).toBe('Hammer');
    });

    describe('checkDetails', () => {
        let scene;

        beforeAll(() => {
            scene = new CrimeScene('Joker', 'Gotham', 'Hammer');
            spyOnProperty(scene, 'database', 'get').and.returnValue(database);
        });

        it('should return an empty array when the Theory is correct', () => {
            const theory = new Theory(1, 1, 1);

            expect(scene.checkDetails(theory).length).toBe(0);
        });

        it('should return an array [1] when the Theory is wrong for suspect', () => {
            const theory = new Theory(2, 1, 1);

            expect(scene.checkDetails(theory)).toEqual([1]);
        });

        it('should return an array [2] when the Theory is wrong for place', () => {
            const theory = new Theory(1, 2, 1);

            expect(scene.checkDetails(theory)).toEqual([2]);
        });

        it('should return an array [3] when the Theory is wrong for weapon', () => {
            const theory = new Theory(1, 1, 2);

            expect(scene.checkDetails(theory)).toEqual([3]);
        });

        it('should return an array [1,2,3] when Theory is completely wrong', () => {
            const theory = new Theory(2, 2, 2);

            expect(scene.checkDetails(theory)).toEqual([1,2,3]);
        });
    });
});

