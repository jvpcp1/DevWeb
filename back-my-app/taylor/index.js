const express = require('express')
const app = express()
app.use(express.json());

const taylorVariavelId = {}

app.get('/econ/:id/taylor', (req, res) => {
    res.send(econ);
})

app.post('/econ/:id/taylor', (req, res) => {
    contador++;
    const { texto } = req.body;
    econ[contador] = {
        contador, texto
    };
    res.status(201).send(econ[contador]);
})

app.listen(5000, () => {
    console.log('taylor, Porta 5000')
});