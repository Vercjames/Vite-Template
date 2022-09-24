import md5 from "md5"
import axios from "axios"
import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"


// Mobx Controller || Model Definition
// =====================================================================================================================
// =====================================================================================================================
export const AuthStore = types.model({
  isAuthenticated: types.optional((types.boolean), true),
}).actions((self: any) => ({
  login() {
    self.isAuthenticated = true
  },
  logout() {
    self.isAuthenticated = false
  },
}))


// Mobx Controller || Interface Exports
// =====================================================================================================================
// =====================================================================================================================
export interface IAuthStore extends Instance<typeof AuthStore> { }
export interface IAuthStoreSnapshotIn extends SnapshotIn<typeof AuthStore> { }
export interface IAuthStoreSnapshotOut extends SnapshotOut<typeof AuthStore> { }
