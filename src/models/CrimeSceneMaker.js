import { CrimeScene } from "./CrimeScene";

export class CrimeSceneMaker {
    constructor(database) {
        this._db = database;
    }

    makeScene() {
        const suspect = this._db.suspects[Math.floor(Math.random() * this._db.suspects.length)];
        const place = this._db.places[Math.floor(Math.random() * this._db.places.length)];
        const weapon = this._db.weapons[Math.floor(Math.random() * this._db.weapons.length)];

        return new CrimeScene(suspect, place, weapon);
    }
}