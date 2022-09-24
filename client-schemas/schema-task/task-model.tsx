import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"


// Mobx Controller || Model Definition
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const TaskModel = types.model({
  title: types.optional(types.string, ""),
  description: types.optional(types.string, ""),
}).actions((self: any) => ({
  changeName(title: string) {
    self.title = title
  },
}))


// Mobx Controller || Interface Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export interface ITaskModel extends Instance<typeof TaskModel> { }
export interface ITaskModelSnapshotIn extends SnapshotIn<typeof TaskModel> { }
export interface ITaskModelSnapshotOut extends SnapshotOut<typeof TaskModel> { }
