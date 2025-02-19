import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { BlogService } from './blog.service'

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogService.createBlog(req.file, req.body)

  sendResponse(res, {
    success: true,
    message: 'Blog created successfully',
    statusCode: 201,
    data: result,
  })
})

const getAllBlog = catchAsync(async (req, res) => {
  const result = await BlogService.getAllBlog()

  sendResponse(res, {
    success: true,
    message: 'Blog list retrieved successfully',
    statusCode: 200,
    data: result,
  })
})
const getBlog = catchAsync(async (req, res) => {
  const result = await BlogService.getBlog(req.params.id)

  sendResponse(res, {
    success: true,
    message: 'Blog retrieved successfully',
    statusCode: 200,
    data: result,
  })
})

const updateBlog = catchAsync(async (req, res) => {
  const id = req.params.blogId
  const body = req.body

  const result = await BlogService.updateBlog(id, req.file, body)

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Blog updated successfully.',
    data: result,
  })
})

const deleteBlog = catchAsync(async (req, res) => {
  const result = await BlogService.deleteBlog(req.params.id)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog deleted successfully',
  })
})

export const BlogController = {
   createBlog,
   getAllBlog,
   getBlog,
   updateBlog,
   deleteBlog
}
