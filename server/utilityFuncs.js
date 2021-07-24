const fs = require('fs');

function getPostData(request) {
    return new Promise((resolve, reject) => {
        try {
            let body = '';
            request.on('data', chunk => {
                body += chunk.toString();
            }).on('end', () => {
                resolve(JSON.parse(body));
            }); 
        } catch (error) {
            reject(error);
        }
    });
}

function writeDataToFile(fileName, content) {
    fs.writeFileSync(fileName, JSON.stringify(content), 'utf8', error => {
        if (error) {
            console.log(error);
        }
    })
}

module.exports = {
    getPostData,
    writeDataToFile
}