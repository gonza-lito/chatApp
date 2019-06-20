import { ChatStoreModel, ChatStore } from "./chat-store"

test("can be created", () => {
  const instance: ChatStore = ChatStoreModel.create({ rooms: [], isLoading: false, currentRoom: null})

  expect(instance).toBeTruthy()
})