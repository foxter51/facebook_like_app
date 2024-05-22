import { Request, Response } from 'express'
import * as authService from '../services/auth.service'

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    try {
        const registeredUserToken = await authService.registerUser(name, email, password)
        res.status(200).json(registeredUserToken)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
        const authenticatedUserToken = await authService.loginUser(email, password)
        res.status(200).json(authenticatedUserToken)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}