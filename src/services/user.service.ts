import { prisma } from '../main'

export const findOne = async (userId: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(userId) },
        })

        if (!user) {
            throw new Error('User not found')
        }

        return { user }
    } catch (err) {
        throw new Error(err.message)
    }
}