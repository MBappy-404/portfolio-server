import { sendImageToCloudinary } from '../../utils/hostImage'

import { TProject } from './project.interface'
import Project from './project.model'

// Create a new product
const createProject = async (file: any, payload: TProject) => {
  if (file) {
    const imageName = `project_${payload?.projectName}`
    const path = file?.path
    // console.log(imageName, path);

    const { secure_url } = await sendImageToCloudinary(imageName, path)
    payload.projectImage = secure_url as string
    // console.log(secure_url)
  }

  const data = new Project(payload)
  const result = await data.save()

  return result
}

// Get all projects
const getAllProjects = async () => {
  const result = await Project.find()
  return result
}

// // Get a single product by ID
const getSingleProjects = async (id: string) => {
  const result = await Project.findById(id)
  return result
}

// // Update a product by ID
const updateProject = async (
  id: string,
  file: any,
  payload: Partial<TProject>
) => {
  if (file) {
    const imageName = `product_${payload.projectName}`
    const path = file?.path
    // console.log(imageName, path);

    const { secure_url } = await sendImageToCloudinary(imageName, path)
    payload.projectImage = secure_url as string
  }

  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })

  return result
}

// Delete a product by ID
const deleteProject = async (projectId: string) => {
  const result = await Project.deleteOne({ _id: projectId })
  return result
}

export const ProjectService = {
  createProject,
  getAllProjects,
  getSingleProjects,
  updateProject,
  deleteProject,
}
