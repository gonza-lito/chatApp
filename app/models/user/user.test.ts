import { UserModel, User } from "./user"

test("can be created", () => {
  const instance: User = UserModel.create({
    id: '12345',
    nickname: 'pepe'
  })

  expect(instance).toBeTruthy()
})