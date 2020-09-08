const express = require('express')
const hbs = require('hbs')

const app = express()

app.use(express.static('public'))
app.set('views', `${__dirname}/views`)          // directoruo de vistas dinámicas
app.set('view engine', 'hbs')                   // motor de visualización


// application
app.get('/', (req, res) => {

    const data = {
        name: 'Cecilia',
        campus: 'Matadero <strong>Madrid</strong>',
        activated: true,
        subjects: ['Javascript', 'HTML', 'CSS', 'Node', 'ReactJS'],
        payed: false,
        address: {
            street: 'Calle del delicioso',
            number: 22,
            code: 7844
        }
    }

    res.render('index-page', data)
})

app.listen(3000, () => console.log('servidor levantado en puerto 3000'))