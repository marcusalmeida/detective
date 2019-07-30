import { CrimeSceneMaker } from '../src/models/CrimeSceneMaker';

const database = {
    suspects: ['Joker', 'Thanos',],
    places:   ['Gotham', 'Wakanda'],
    weapons : ['Hammer', 'Infinity Gunlet']
};

describe('CrimeSceneMaker', () => {
    it('should make a crime scene randomly using database informations', () => {
        const maker = new CrimeSceneMaker(database);
        const scene = maker.makeScene();

        expect(database.suspects).toContain(scene.suspect);
        expect(database.places).toContain(scene.place);
        expect(database.weapons).toContain(scene.weapon);
    });
});