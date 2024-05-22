import { prisma } from '../main'

export const create = async (postBody: string, createdBy: number) => {
    try {
        const creator = await prisma.user.findUnique({
            where: { id: createdBy }
        })

        if (!creator) {
            throw new Error('Creator not found')
        }

        const post = await prisma.post.create({
            data: {
                post: postBody,
                createdBy
            }
        })

        return { post }
    } catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async () => {
    try {
        const posts = await prisma.post.findMany()
        return { posts }
    } catch (err) {
        throw new Error(err.message)
    }
}