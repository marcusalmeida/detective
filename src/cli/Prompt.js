import inquirer from 'inquirer';
import { Table } from "./Table";
import { Database as db} from "../Database";
import { Theory } from "../models/CrimeScene";

const TABLE = new Table(db);

/**
 * Prompt show questions for detective, 
 * and show witness's answer, until the crime is solved.
 * 
 */
export class Prompt {

    /**
     * Show the questions and verify the theory using the witness's knowledge.
     * @param {*} witness 
     */
    static async showPrompt(witness){
        let result;
        do {

            TABLE.showSuspects();
            const responseSuspect = await askSuspect();
    
            TABLE.showPlaces();
            const responsePlace = await askPlace();
    
            TABLE.showWeapons();
            const responseWeapon = await askWeapon();

            let theory = new Theory(parseInt(responseSuspect.suspect, 10),
                                    parseInt(responsePlace.place, 10),
                                    parseInt(responseWeapon.weapon, 10));

            result = witness.verifyTheory(theory, db); 
            console.log(`\nA testemunha retornou ${result} para a teoria informada.`);

        } while(result !== 0);
        
        return result;
    }
}

const isNotInt = (value) => { return isNaN(parseInt(value, 10)); };
const valueInInterval = (value, limit) => {
    const parsedValue = parseInt(value, 10);
    return (parsedValue > 0) && (parsedValue < limit + 1); 
};

/**
 * Show prompt for suspect.
 */
const askSuspect = () => {
    const questions = [
        {
            name: 'suspect',
            type: 'input',
            message: 'Informe o número do provável suspeito:',
            validate: function(value) {
                let limit = db.suspects.length;
                if (value.length) {
                    if (isNotInt(value)) {
                        return 'Por favor, informe um número válido para o provável suspeito.';
                    } else if (!valueInInterval(value, limit)){
                        return 'Por favor, informe um número válido para o provável suspeito.';
                    } else {
                        return true;
                    }
                } else {
                    return 'Por favor, informe o número do provável suspeito.';
                }
            }
        }
    ];
    return inquirer.prompt(questions);
};

/**
 * Show prompt for place.
 */
const askPlace = () => {
    const questions = [
        {
            name: 'place',
            type: 'input',
            message: 'Informe o número do provável local do crime:',
            validate: function(value) {
                let limit = db.places.length;
                if (value.length) {
                    if (isNotInt(value)) {
                        return 'Por favor, informe um número válido para provável local do crime.';
                    } else if (!valueInInterval(value, limit)){
                        return 'Por favor, informe um número válido para provável do crime.';
                    } else {
                        return true;
                    }
                } else {
                    return 'Por favor, informe o número provável do local crime.';
                }
            }
        }
    ];
    return inquirer.prompt(questions);
};

/**
 * Show prompt for weapon.
 */
const askWeapon = () => {
    const questions = [
        {
            name: 'weapon',
            type: 'input',
            message: 'Informe o número da provável arma utilizada no crime:',
            validate: function(value) {
                let limit = db.weapons.length;
                if (value.length) {
                    if (isNotInt(value)) {
                        return 'Por favor, informe um número válido para a provável arma utilizada no crime.';
                    } else if (!valueInInterval(value, limit)){
                        return 'Por favor, informe um número válido para a provável arma utilizada no crime.';
                    } else {
                        return true;
                    }
                } else {
                    return 'Por favor, informe o número da arma.';
                }
            }
        }
    ];
    return inquirer.prompt(questions);
};
