import { types, Instance, SnapshotIn, SnapshotOut, onSnapshot } from "mobx-state-tree"


// Mobx Controller || Root Structure
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import { TaskStore } from "../schema-task/task-store"
import { UserModel } from "../schema-user/user-model"


// Mobx Controller || Root Store Structure
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const MSTRoot = types.model({
  TaskStore: types.optional(TaskStore, {}),
  UserState: types.optional(UserModel, {}),
}).actions((self: any) => ({
  logRootStore() {
    console.log(self)
  },
})).create({})


// onSnapshot(MSTStore, (snapshot) => {
//   // this triggers on EVERY sub model change, provided the component is wrapped in the Observer()
//   console.log("====================================================")
//   console.log("snapshot: ", snapshot)
// })


// Mobx Controller || Interface Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export interface IRootStore extends Instance<typeof MSTRoot> { }
export interface IRootStoreSnapshotIn extends SnapshotIn<typeof MSTRoot> { }
export interface IRootStoreSnapshotOut extends SnapshotOut<typeof MSTRoot> { }
