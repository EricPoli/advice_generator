const express = require('express')
const router = express.Router() 
const path = require('path')
const app = express()

app.use(express.static("public"));
app.listen(3000, () => console.log('Rodando...'));