const fs = require('fs');
const path = require('path');

class FileHandler {
    CreateFile(fullFilePath) {
        console.log(fullFilePath);
        if (!fs.existsSync(fullFilePath))
            fs.writeFile(fullFilePath, '', () => {
                console.log('file was written');
        });
    }

    DeleteFile(fullFilePath) {
        if (fs.existsSync(fullFilePath))
            fs.rm(fullFilePath);
    }

}

module.exports = FileHandler;