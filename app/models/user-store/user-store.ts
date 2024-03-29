import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { UserModel } from "../user/user";
import * as  uuid from  "uuid";

/**
 * Model description here for TypeScript hints.
 */
export const UserStoreModel = types
         .model("UserStore")
         .props({
           currentUser: types.maybeNull(UserModel),
           isLoggedIn: types.boolean,
         })
         .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
         .actions(self => ({
           login(name) {
             if(!name || name === '') {
               throw "nickname can't be empty"
             }
             self.currentUser = UserModel.create({
               nickname: name,
               id: uuid.v1()
             });
             self.isLoggedIn = true;

           }
         })) // eslint-disable-line @typescript-eslint/no-unused-vars

  /**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type UserStoreType = Instance<typeof UserStoreModel>
export interface UserStore extends UserStoreType {}
type UserStoreSnapshotType = SnapshotOut<typeof UserStoreModel>
export interface UserStoreSnapshot extends UserStoreSnapshotType {}
