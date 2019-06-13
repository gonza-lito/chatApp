import { ChatStoreModel } from "../../models/chat-store"import { UserStoreModel } from "../../models/user-store"import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { NavigationStoreModel } from "../../navigation/navigation-store"

/**
 * An RootStore model.
 */
export const RootStoreModel  chatStore: types.optional(ChatStoreModel, {}),  userStore: types.optional(UserStoreModel, {}), = types.model("RootStore").props({
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
