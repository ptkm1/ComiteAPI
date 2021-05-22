import { config } from 'dotenv'
config()

import cors from 'cors'
import express from 'express'
import { AdminRoutes } from './presentation/routes/Admin.routes'
import { RotasUsuarios } from './presentation/routes/Usuario.routes'


const app = express()

app.use(express.json())
app.use(cors())
app.use('/docs', express.static(`${__dirname}/documentation`))
app.use(AdminRoutes)
app.use(RotasUsuarios)

app.listen(8080, () => console.log("Rodando!"))