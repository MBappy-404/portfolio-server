import { Request, Response } from 'express'

import sendResponse from '../../utils/sendResponse'
import catchAsync from '../../utils/catchAsync'
import { ProjectService } from './project.service'

const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.createProject(req.file, req.body)

  sendResponse(res, {
    success: true,
    message: 'Project created successfully',
    statusCode: 201,
    data: result,
  })
})

// Get all products
const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.getAllProjects()

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Project list retrieved successfully.',
    data: result,
  })
})

// // Get a single product by ID
const getSingleProjects = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.projectId
  const result = await ProjectService.getSingleProjects(id)

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'project retrieved successfully.',
    data: result,
  })
})

// // Update an existing product
const updateProject = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.projectId
  const body = req.body
 
  

  const result = await ProjectService.updateProject(id, req.file, body)

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Project updated successfully.',
    data: result,
  })
})

// // Delete a product
const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.projectId
  await ProjectService.deleteProject(id)

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Product deleted successfully.',
    // data: {},
  })
})

// Export all the controller methods for use in routes
export const ProjectController = {
  createProject,
  getAllProjects,
  getSingleProjects,
  updateProject,
  deleteProject,
}
