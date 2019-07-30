import { CrimeScene, Theory } from '../src/models/CrimeScene';
import { Witness } from '../src/models/Witness';

describe('Witness', () => {
    let scene;
    beforeAll(() => {
        scene = new CrimeScene('Joker', 'Gotham', 'Hammer');
    });
    describe("verifing theory", () => {
        it('should return 0 when theory is correct', () => { 
            spyOn(scene, 'checkDetails').and.returnValue([]);
            const witness = new Witness(scene);

            const theory = new Theory(1, 1, 1);
    
            expect(witness.verifyTheory(theory)).toBe(0);
            expect(scene.checkDetails).toHaveBeenCalledWith(theory);
        });

        it('should return 1 when the suspect is wrong', () => {
            spyOn(scene, 'checkDetails').and.returnValue([1]);
            const witness = new Witness(scene);

            const theory = new Theory(2, 1, 1);
            
            expect(witness.verifyTheory(theory)).toBe(1);
            expect(scene.checkDetails).toHaveBeenCalledWith(theory);
        });

        it('should return 2 when place is wrong', () => {
            spyOn(scene, 'checkDetails').and.returnValue([2]);
            const witness = new Witness(scene);

            const theory = new Theory(1, 2, 1);
            
            expect(witness.verifyTheory(theory)).toBe(2);
            expect(scene.checkDetails).toHaveBeenCalledWith(theory);
        });

        it('should return 3 when weapon is wrong', () => {
            spyOn(scene, 'checkDetails').and.returnValue([3]);
            const witness = new Witness(scene);

            const theory = new Theory(1, 1, 2);
            
            expect(witness.verifyTheory(theory)).toBe(3);
            expect(scene.checkDetails).toHaveBeenCalledWith(theory);
        });

        it('should return 2 or 3 (randomly) when place or weapon is wrong', () => {
            spyOn(scene, 'checkDetails').and.returnValue([2, 3]);
            const witness = new Witness(scene);

            const theory = new Theory(1, 2, 2);
            
            expect([2,3]).toContain(witness.verifyTheory(theory));
            expect(scene.checkDetails).toHaveBeenCalledWith(theory);
        });
    });
});