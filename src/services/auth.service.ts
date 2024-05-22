import { prisma } from '../main'
import { generateToken } from '../config/jwt.config'
import * as argon2 from 'argon2'

export const registerUser = async (name: string, email: string, password: string) => {
    try {
        let user

        user = await prisma.user.findUnique({
                where: { email }
            })

        if (user) {
            throw new Error('Email is already taken')
        }

        user = await prisma.user.create({
            data: {
                name,
                email,
                password: await argon2.hash(password)
            }
        })

        return { token: generateToken(user.email), id: user.id }
    } catch (err) {
        throw new Error(err.message)
    }
}

export const loginUser = async (email: string, password: string) => {
    try {
        const user = await prisma.user.findUniqueOrThrow({
            where: { email }
        })

        const isValid = await argon2.verify(user.password, password)

        if (!isValid) {
            throw new Error('Invalid email or password')
        }

        return { token: generateToken(user.email), id: user.id }
    } catch (err) {
        throw new Error(err.message)
    }
}