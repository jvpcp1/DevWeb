const express = require(express)
const axios = require(axios)

const app = express ()
app.use(express.json())

app.post('/eventos', (req, res) => {
        //envia o evento para o microservicos de lembretes
    axios.post('http://localhost:4000', evento)
        //envia o evento para o microservicos de econ
    axios.post('http://localhost:5000/eventos, evento')
    res.send({msg: 'ok'})    
    })

app.listen(10000, ( => {
    console.log ('Barramento porta 10mil')
}))