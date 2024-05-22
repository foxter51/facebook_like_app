import { Request, Response } from 'express'
import * as postService from '../services/post.service'

export const create = async (req: Request, res: Response) => {
    const { postBody, createdBy } = req.body

    try {
        const post = await postService.create(postBody, createdBy)
        res.status(200).json(post)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

export const findAll = async (_req: Request, res: Response) => {
    try {
        const posts = await postService.findAll()
        res.status(200).json(posts)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}