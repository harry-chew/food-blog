const fs = require('fs');
const path = require('path');

class FileHandler {
    CreateFile(fullFilePath, text) {
        console.log(fullFilePath);
        if (!fs.existsSync(fullFilePath))
            fs.writeFile(fullFilePath, text, () => {
                console.log(`${fullFilePath} was written`);
        });
    }

    DeleteFile(fullFilePath) {
        if (fs.existsSync(fullFilePath))
            fs.rm(fullFilePath);
    }

}

module.exports = FileHandler;