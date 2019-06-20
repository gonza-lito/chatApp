import { UserStoreModel, UserStore } from "./user-store"

test("can be created", () => {
  const instance: UserStore = UserStoreModel.create({
    currentUser: null,
    isLoggedIn: false,
  })

  expect(instance).toBeTruthy()
})