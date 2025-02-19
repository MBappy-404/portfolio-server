import { NextFunction, Request, Response, Router } from 'express'
import { ProjectController } from './project.controller'
import { upload } from '../../utils/hostImage'

const projectRoute = Router()
// product all routes
projectRoute.post(
  '/create-project',

  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    next()
  },

  ProjectController.createProject
)
projectRoute.get('/', ProjectController.getAllProjects)
projectRoute.get('/:projectId', ProjectController.getSingleProjects)
projectRoute.put(
  '/:projectId',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    next()
  },
  ProjectController.updateProject
)
projectRoute.delete('/:projectId', ProjectController.deleteProject)

export default projectRoute
