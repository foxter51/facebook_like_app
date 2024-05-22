import { Request, Response } from 'express'
import * as userService from '../services/user.service'

export const findOne = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const user = await userService.findOne(id)
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}