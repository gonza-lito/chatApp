import { Instance, SnapshotOut, types, flow } from "mobx-state-tree"
import { ChatModel, Chat, ChatSnapshot } from "../chat/chat"
import * as uuid from "uuid";
import { MessageModel } from "../message";
import { User } from "../user";

/**
 * Model description here for TypeScript hints.
 */
export const ChatStoreModel = types
         .model("ChatStore")
         .props({ 
           rooms: types.optional(types.array(ChatModel), []), 
           isLoading: types.boolean, 
           currentRoom: types.maybeNull(types.reference(ChatModel)) })
         .views(self => ({}))
         .actions(self => ({ 
           setRooms(value: Chat[] | ChatSnapshot[]) {
           self.isLoading = true;
             if (self.rooms) {
               if (value) {
                 self.rooms.replace(value as any)
               } else {
                 self.rooms.clear()
               }
             } else {
               self.rooms = value as any
             }
           },
          createRoom (name: string) {
            const newRoom = ChatModel.create({
              id: uuid.v1(),
              name: name,
              messages: [],

            });
            self.rooms.push(newRoom);
            return newRoom;
             
          },
          sendMessageToCurrentRoom (message: string, user: User) {
            const newMessage = MessageModel.create({
              id: uuid.v1(),
              text: message,
              timestamp: new Date(),
              author: user.id,
            });

            self.currentRoom.receive(newMessage)

          }
        })) // eslint-disable-line @typescript-eslint/no-unused-vars
         .actions(self => ({ loadRooms: flow(function*() {
             
             self.setRooms([])
             self.isLoading = false;
           }) ,
          createAndSetCurrent(name: string) {
            self.currentRoom = self.createRoom(name);
          }})) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type ChatStoreType = Instance<typeof ChatStoreModel>
export interface ChatStore extends ChatStoreType {}
type ChatStoreSnapshotType = SnapshotOut<typeof ChatStoreModel>
export interface ChatStoreSnapshot extends ChatStoreSnapshotType {}
