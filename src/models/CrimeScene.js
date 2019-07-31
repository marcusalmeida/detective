/**
 * CrimeScene 
 * 
 */
export class CrimeScene {
    
    constructor(suspect, place, weapon) {
        this._suspect = suspect;
        this._place = place;
        this._weapon = weapon;
    }

    get suspect() {
        return this._suspect;
    }

    get place() {
        return this._place;
    }

    get weapon() {
        return this._weapon;
    }

    /**
     * Checks informed theory.
     * 
     * @param {*} theory 
     * @param {*} database 
     */
    checkDetails(theory, database) {
        let results = [];
        
        if (database.suspects[theory.suspect - 1] !== this.suspect){
            results.push(1);
        }

        if (database.places[theory.place - 1] !== this.place){
            results.push(2);
        }
        
        if (database.weapons[theory.weapon - 1] !== this.weapon){
            results.push(3);
        }

        return results;
    }
}

const errors = {
    suspectInvalid : 'Invalid argument for suspect.',
    placeInvalid : 'Invalid argument for place.',
    weaponInvalid : 'Invalid argument for weapon.' 
};

/**
 * Theory
 *  
 */
export class Theory {
    constructor(suspect, place, weapon) {
        
        if(!suspect) {
            throw new Error(errors.suspectInvalid); 
        }
        if (!place) {
            throw new Error(errors.placeInvalid);
        }
        if (!weapon) {
            throw new Error(errors.weaponInvalid);
        }

        this._suspect = suspect;
        this._place = place;
        this._weapon = weapon;
    }
    get suspect() { return this._suspect; }
    get place() { return this._place; }
    get weapon() { return this._weapon; }
}