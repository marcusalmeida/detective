import clear from 'clear';
import chalk from 'chalk';
import figlet from 'figlet';
import { Database as db } from './Database';
import { Prompt } from './cli/Prompt';
import { CrimeSceneMaker } from './models/CrimeSceneMaker';
import { Witness } from './models/Witness';

clear();
console.log(
    chalk.green.bold(
        figlet.textSync('Detective', {horizontalLayout: 'fitted'})
    )
);
console.log("===============================================================================");
console.log(chalk.black.bold("Ocorreu um crime, Detetive Lin!"));
console.log(chalk.black.bold("E temos uma testemunha."));
console.log();
console.log("Para tentar resolver esse caso você precisa informar: Suspeito, Local e Arma.");
console.log("E com essas informações a testemunha vai informar:");
console.log("0: se a teoria informada estiver correta, ");
console.log("1: caso o suspeito estiver errado,");
console.log("2: caso o local estiver errado,");
console.log("3: caso a arma estiver errada.");
console.log("Obs: Caso mais de uma opção estiver errado retornará alguma das opções errada.");
console.log();
console.log("===============================================================================");

const maker = new CrimeSceneMaker(db);
const scene = maker.makeScene();

//console.log(scene);

const run = () => {
    const witness = new Witness(scene);    
    Prompt.showPrompt(witness).then(res => {
        console.log(`Crime solucionado Detetive!`);
        console.log(`Crime foi executado por ${scene.suspect} em ${scene.place} usando um(a) ${scene.weapon}.`);
    });
};

run();

console.log(scene);