import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { MessageService } from './message.service'

const createMessage = catchAsync(async (req, res) => {
  const result = await MessageService.createMessage(req.body)

  sendResponse(res, {
    success: true,
    message: 'Message created successfully',
    statusCode: 201,
    data: result,
  })
})

const getAllMessage = catchAsync(async (req, res) => {
  const result = await MessageService.getAllMessage()

  sendResponse(res, {
    success: true,
    message: 'Message list retrieved successfully',
    statusCode: 200,
    data: result,
  })
})

export const MessageController = {
  createMessage,
  getAllMessage,
}
