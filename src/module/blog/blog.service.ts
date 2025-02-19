// import AppError from '../../errors/AppError'
import { sendImageToCloudinary } from '../../utils/hostImage'
import { TBlog } from './blog.interface'
import Blog from './blog.model'

const createBlog = async (file: any, payload: TBlog)  => {
  if (file) {
    const imageName = `blog_${payload?.title}`
    const path = file?.path
    // console.log(imageName, path);

    const { secure_url } = await sendImageToCloudinary(imageName, path)
    payload.blogImage = secure_url as string
    // console.log(secure_url)
  }

  const data = new Blog(payload)
  const result = await data.save()
  return result;
}
const getAllBlog = async (): Promise<TBlog[]> => {
  const result = await Blog.find()
  return result
}

const getBlog = async (id: string) => {
  const result = await Blog.findById(id)
  return result
}

const updateBlog = async (
  id: string,
  file: any,
  payload: Partial<TBlog>
) => {
  if (file) {
    const imageName = `blog_${payload.title}`
    const path = file?.path
    // console.log(imageName, path);

    const { secure_url } = await sendImageToCloudinary(imageName, path)
    payload.blogImage = secure_url as string
  }

  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })

  return result
}

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id)
  return result
}

export const BlogService = {
  createBlog,
   getAllBlog,
   getBlog,
   updateBlog,
  deleteBlog,
}
