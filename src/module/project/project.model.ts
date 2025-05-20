import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true },
    projectImage: { type: String, required: true },
    frontendGitHubLink: { type: String, required: true },
    backendGitHubLink: { type: String, required: true },
    liveProjectLink: { type: String, required: true },
    technologies: { type: [String], required: true },
    projectDescription: { type: String, required: true },
    category: { type: String },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Project =
  mongoose.models.projects || mongoose.model('projects', projectSchema)

export default Project
