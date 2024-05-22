import { Router } from 'express'
import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import postRoutes from './post.routes'

const routes = Router()

routes.use('/auth', authRoutes)
routes.use('/users', userRoutes)
routes.use('/posts', postRoutes)

export default routes