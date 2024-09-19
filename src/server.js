import express from 'express'
import cors from 'cors'
// import swaggerUi from 'swagger-ui-express'
// import swaggerDocument from './swagger/swagger.json'

import { PORT } from './config/config.js'

import userRoutes from './routes/userRoutes.js'
// import taskRoutes from './routes/taskRoutes.js'
// import categoryRoutes from './routes/categoryRoutes.js'
// import taskListRoutes from './routes/taskListRoutes.js'

import {errorHandler} from './middlewares/errorMiddleware.js'


const app = express()


// Middleware CORS
app.use(cors())

app.use(express.json())

// Rotas
app.use('/users', userRoutes)
// app.use('/tasks', upload.single('file'), manejarErrorArchivo, taskRoutes)
// app.use('/categories', categoryRoutes)  
// app.use('/task-lists', taskListRoutes)

// Middleware de tratamento de erros gerais
app.use(errorHandler)

// Swagger Docs
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('*', (req, res) => res.end('USE: Não existe a rota'))

app.listen(PORT, () => { console.log(`Servidor corrento na porta ${PORT}`)})
