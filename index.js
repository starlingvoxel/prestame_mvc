import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from './config/db.js'
//crear la app
const app = express()

// Habilitar Pug
app.set('view engine', 'pug')
app.set('views', './views')

// Carpeta Pública
app.use(express.static('public'))

// Routing

app.use('/auth', usuarioRoutes)

// Conexión a la base de datos
try {
    await db.authenticate();
    db.sync()
    console.log('Conexión Correcta a la Base de datos')
} catch (error) {
    console.log(error)
}
/*app.use('/', propiedadesRoutes)
app.use('/', appRoutes)
app.use('/api', apiRoutes)*/

// Definir un puerto y arrancar el proyecto
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
});