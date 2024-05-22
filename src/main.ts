import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import routes from './routes/index'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

const app = express()

async function main() {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use('/api', routes)

    const PORT = process.env.PORT ?? 3001

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

main()
    .then(async() => {
        await prisma.$connect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })