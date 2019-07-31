const {printTable} = require('console-table-printer');
 
export class Table {
    constructor(database) {
        this._db = database;
    }

    showSuspects() {
        const suspects = [];
        this._db.suspects.forEach((element, index) => {
            suspects.push({Número: index+1, Suspeito: element });
        });
        printTable(suspects);
    }

    showPlaces() {
        const places = [];
        this._db.places.forEach((element, index) => {
            places.push({Número: index+1, Lugar: element });
        });
        printTable(places);
    }

    showWeapons() {
        const weapons = [];
        this._db.weapons.forEach((element, index) => {
            weapons.push({Número: index+1, Arma: element });
        });
        printTable(weapons);
    }
}