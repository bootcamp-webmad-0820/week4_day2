// Requerir express
const express = require('express')

// Instanciar aplicación
const app = express()

// Habilitar directorio de recursos estáticos
app.use(express.static('public'))

// Endpoints
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index-page.html`)
})

app.get('/meme', (req, res) => {
    res.sendFile(`${__dirname}/views/lord-meme-page.html`)
})



// Levantar server
app.listen(3000, () => console.log('Servidor levantado en el puerto 3000'))