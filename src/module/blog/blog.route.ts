import express, { NextFunction, Request, Response } from 'express'

import { upload } from '../../utils/hostImage'
import { BlogController } from './blog.controller'

const router = express.Router()

router.post(
  '/create-blog',

  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    next()
  },

   BlogController.createBlog
)
router.get('/', BlogController.getAllBlog)
router.get('/:id', BlogController.getBlog)
router.put(
  '/:blogId',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    next()
  },
  BlogController.updateBlog
)
router.delete('/:id', BlogController.deleteBlog)

export const BlogRoute = router
