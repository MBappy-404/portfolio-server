import mongoose from 'mongoose'

const blogsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    blogImage: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
)

const Blog = mongoose.models.blogs || mongoose.model('blogs', blogsSchema)

export default Blog
