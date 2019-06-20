import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { MessageModel, Message } from "../message"

/**
 * Model description here for TypeScript hints.
 */
export const ChatModel = types
  .model("Chat")
  .props({
    id: types.identifier,
    name: types.string,
    messages: types.optional(types.array(MessageModel), []),
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    receive(message: Message) {
      self.messages.push(message);
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type ChatType = Instance<typeof ChatModel>
export interface Chat extends ChatType {}
type ChatSnapshotType = SnapshotOut<typeof ChatModel>
export interface ChatSnapshot extends ChatSnapshotType {}
