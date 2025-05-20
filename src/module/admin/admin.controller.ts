import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AdminService } from './admin.service'
 

const createAdmin = catchAsync(async (req, res) => {
  const result = await AdminService.createAdmin(req.body)

  sendResponse(res, {
    success: true,
    message: 'Admin Login successfully',
    statusCode: 201,
    data: result,
  })
})
 
 
 

export const AdminController = {
   createAdmin,
   
}
