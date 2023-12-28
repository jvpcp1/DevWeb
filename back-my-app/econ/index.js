const express = require('express')
const app = express()
app.use(express.json());

const econ = {}
let contador = 0;

app.get('/econ', (req, res) => {
    res.send(econ);
})

app.post('/econ', (req, res) => {
    contador++;
    const { texto } = req.body;
    econ[contador] = {
        contador, texto
    };
    res.status(201).send(econ[contador]);
})

app.listen(4000, () => {
    console.log('econ, Porta 4000')
});