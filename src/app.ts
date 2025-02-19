import express, { Request, Response } from 'express'

import { BlogRoute } from './module/blog/blog.route'

import cors from 'cors'
import projectRoute from './module/project/project.route'
import { messageRoute } from './module/message/message.route'
import globalErrorHandler from './middleware/globalError'

const app = express()

// middleware
app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:3000','https://dev-saroar-jahan.vercel.app'],
    credentials: true,
  })
)

//  api routes

app.use('/api/projects', projectRoute)
app.use('/api/message', messageRoute)
app.use('/api/blogs', BlogRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Bappys Portfolio  is running')
})

app.use(globalErrorHandler)

export default app
