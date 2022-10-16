import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"
import { TaskModel } from "./task-model"


// Mobx Controller || Model Definition
// =================================================================================================
// =================================================================================================
export const TaskStore = types.model({
  TaskCollection: types.optional(types.array(TaskModel), []),
}).actions((self: any) => ({
  addTask(title: string, description: string) {
    self.TaskCollection.push({ id: self.TaskCollection.length, title, description })
  },
}))


// Mobx Controller || Interface Exports
// =================================================================================================
// =================================================================================================
export interface ITaskStore extends Instance<typeof TaskStore> { }
export interface ITaskStoreSnapshotIn extends SnapshotIn<typeof TaskStore> { }
export interface ITaskStoreSnapshotOut extends SnapshotOut<typeof TaskStore> { }


