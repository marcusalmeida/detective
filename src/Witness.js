/**
 * Witness
 * 
 */
export class Witness {
    constructor(crimeScene) {
        this._crimeScene = crimeScene;
    }

    verifyTheory(theory) {
        const sceneDetails = this._crimeScene.checkDetails(theory);
        if (sceneDetails.length === 0) {
            return 0;
        } else {
            return sceneDetails[Math.floor(Math.random() * sceneDetails.length)];
        }
    }
}