const {printTable} = require('console-table-printer');
 
export class Table {
    constructor(database) {
        this._db = database;
    }

    show() {
        const suspects = [];
        const places = [];
        const weapons = [];
        
        this._db.suspects.forEach((element, index) => {
            suspects.push({index: index+1, Suspeitos: element });
        });
        printTable(suspects);
        this._db.places.forEach((element, index) => {
            places.push({index: index+1, Lugares: element });
        });
        printTable(places);
        this._db.weapons.forEach((element, index) => {
            weapons.push({index: index+1, Armas: element });
        });
        printTable(weapons);
    }
}