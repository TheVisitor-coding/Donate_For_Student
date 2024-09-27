const fs = require('fs');
const express = require('express');
const app = express();

const incrementDonator = () => {
    fs.readFile('./counter.json', 'utf-8', (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture du fichier", err);
            return;
        }

        let counterData;
        
        try {
            counterData = JSON.parse(data);
        } catch (e) {
            console.error("Erreur Parse JSON", e);
            return;
        }

        counterData.counter += 1;

        fs.writeFile('./counter.json', JSON.stringify(counterData), (err) => {
            if (err) {
                console.error("Erreur lors de l'écriture du fichier", err);
            }
        });
    });
}

module.exports = {
    incrementDonator
};
