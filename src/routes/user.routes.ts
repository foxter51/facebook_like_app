import { Router } from 'express'
import { authenticateToken } from '../config/jwt.config'
import * as userController from '../controllers/user.controller'

const router = Router()

router.get('/:id', authenticateToken, userController.findOne)

export default router