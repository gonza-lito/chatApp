import { ChatStoreModel } from "../../models/chat-store";
import { UserStoreModel } from "../../models/user-store";
import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { NavigationStoreModel } from "../../navigation/navigation-store"

/**
 * An RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  chatStore: types.optional(ChatStoreModel, {rooms: [], isLoading: false, currentRoom: null}),
  userStore: types.optional(UserStoreModel, {isLoggedIn: false, currentUser: undefined}),
  navigationStore: types.optional(NavigationStoreModel, {}),
})

/**
 * The RootStore instance.
 */
export type RootStore = Instance<typeof RootStoreModel>

/**
 * The data of an RootStore.
 */
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>
