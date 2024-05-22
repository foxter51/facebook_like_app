import { Router } from 'express'
import { authenticateToken } from '../config/jwt.config'
import * as postController from '../controllers/post.controller'

const router = Router()

router.post('/', authenticateToken, postController.create)
router.get('/', authenticateToken, postController.findAll)

export default router