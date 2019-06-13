import { ChatStoreModel, ChatStore } from "./chat-store"

test("can be created", () => {
  const instance: ChatStore = ChatStoreModel.create({})

  expect(instance).toBeTruthy()
})