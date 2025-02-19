import { TMessage } from './message.interface'
import Message from './message.model'

const createMessage = async (payload: TMessage) => {
  const data = new Message(payload)
  const result = await data.save()
  return result
}
const getAllMessage = async (): Promise<TMessage[]> => {
  const result = await Message.find()
  return result
}

export const MessageService = {
  createMessage,
  getAllMessage,
}
