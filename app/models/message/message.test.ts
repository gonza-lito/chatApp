import { MessageModel, Message } from "./message"
import { UserModel } from "../user";

test("can be created", () => {
  const instance: Message = MessageModel.create({
    id: 'id45',
    text: "a message",
    author: UserModel.create({ id: "123123", nickname: "rere"}).id,
    timestamp: new Date()
  })

  expect(instance).toBeTruthy()
})