import { Router } from 'express'
import { MessageController } from './message.controller'

const router = Router()

router.post('/create-message', MessageController.createMessage)

router.get('/', MessageController.getAllMessage)

export const messageRoute = router
