const express = require('express')
const app = express()

app.get("/", function(req, res) {
    res.send("está online")
})


let listaDePedidos = [
    {
        "id":1,
        "cliente":"Vinicius",
        "id_cliente":100,
        "produto":"X-Bacon",
        "valor":29.9
    },
    {
        "id":2,
        "cliente":"Vinicius",
        "id_cliente":100,
        "produto":"X-Tudo",
        "valor":35.5
    },
    {
        "id":3,
        "cliente":"Neymar",
        "id_cliente":95,
        "produto":"X-Verificada",
        "valor":40.0
    }
]

//listar
app.get("/listarpedidos", function(req, res) {
    res.send(listaDePedidos)
})

//listar um
app.get("/listarpedido/:id",function(req, res){
    let idinformado = req.params.id
    if(idinformado > listaDePedidos.length){
        res.send("Pedido inválido")
    }else{
        res.send(listaDePedidos[idinformado - 1])
    }
})

app.listen(3000)
//localhost:3000
