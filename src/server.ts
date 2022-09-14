import express, {Request, Response} from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
import apiRoutes from './routes/api'

dotenv.config()

const server = express()

server.use(cors())

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({extended: true}))

server.use('/api', apiRoutes)

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
})

server.listen(process.env.PORT, ()=>{
    console.log(`
        Server Running...
        PORT: http://localhost:${process.env.PORT}
    `)
})
