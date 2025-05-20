import admin from './admin.model'

interface IAdmin {
  email: string
  password: string
}

const createAdmin = async (payload: IAdmin) => {
  const isExistAdmin = await admin.findOne({ email: payload.email, password: payload.password })
  if (!isExistAdmin) {
    throw new Error('Invalid Credentials , You are not authorized')
  }

  return isExistAdmin
}

export const AdminService = {
  createAdmin,
}
