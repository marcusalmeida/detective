/**
 * Witness
 * 
 */
export class Witness {
    constructor(crimeScene) {
        this._crimeScene = crimeScene;
    }

    /**
     * Checks informed theory against crime scene information.
     *  
     * @param {*} theory 
     * @param {*} database 
     */
    verifyTheory(theory, database) {
        const sceneDetails = this._crimeScene.checkDetails(theory, database);
        if (sceneDetails.length === 0) {
            return 0;
        } else {
            return sceneDetails[Math.floor(Math.random() * sceneDetails.length)];
        }
    }
}