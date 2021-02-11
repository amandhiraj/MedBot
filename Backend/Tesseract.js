const { text } = require('express');
const { createWorker } = require('tesseract.js');

const worker = createWorker();

function grabText(url){
    (async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { tsv } } = await worker.recognize(url)
        console.log(tsv);
        await worker.terminate();
      })();
    return tsv;
}

module.exports = {grabText}

