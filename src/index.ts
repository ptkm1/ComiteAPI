import { config } from 'dotenv'
config()

import cors from 'cors'
import express from 'express'
import { AdminRoutes } from './presentation/routes/Admin.routes'
import { RotasUsuarios } from './presentation/routes/Usuario.routes'


const app = express()
app.use(cors())

app.use(express.json())
app.use(express.static(`${__dirname}/documentation/public`))
app.use(AdminRoutes)
app.use(RotasUsuarios)
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/documentation/public/index.html`)
})

app.listen(process.env.PORT || 8080, () => console.log("Rodando!"))
