import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"
import { TaskModel } from "./task-model"


// Mobx Controller || Model Definition
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const TaskStore = types.model({
  taskList: types.optional(types.array(TaskModel), []),
}).actions((self: any) => ({
  addTask(title: string, description: string) {
    self.taskList.push({ title, description })
  },
}))


// Mobx Controller || Interface Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export interface ITaskStore extends Instance<typeof TaskStore> { }
export interface ITaskStoreSnapshotIn extends SnapshotIn<typeof TaskStore> { }
export interface ITaskStoreSnapshotOut extends SnapshotOut<typeof TaskStore> { }


