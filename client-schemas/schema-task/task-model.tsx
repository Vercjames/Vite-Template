import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"


// Mobx Controller || Model Definition
// =================================================================================================
// =================================================================================================
export const TaskModel = types.model({
  id: types.number,
  title: types.string,
  description: types.optional(types.string, ""),
}).actions((self: any) => ({
  changeTitle(title: string) {
    self.title = title
  },
}))


// Mobx Controller || Interface Exports
// =================================================================================================
// =================================================================================================
export interface ITaskModel extends Instance<typeof TaskModel> { }
export interface ITaskModelSnapshotIn extends SnapshotIn<typeof TaskModel> { }
export interface ITaskModelSnapshotOut extends SnapshotOut<typeof TaskModel> { }
