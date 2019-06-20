import { ChatModel, Chat } from "./chat"

test("can be created", () => {
  const instance: Chat = ChatModel.create({
    id: "test2",
    name: "test",
    messages: []
  })

  expect(instance).toBeTruthy()
})