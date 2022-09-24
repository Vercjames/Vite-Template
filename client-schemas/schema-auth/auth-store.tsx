import md5 from "md5"
import axios from "axios"
import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree"


// Mobx Controller || Model Definition
// =====================================================================================================================
// =====================================================================================================================
export const AuthStore = types.model({
  token: types.optional(types.maybe(types.string), "RAWR"),
}).actions((self: any) => ({
  login() {
    // md5 is a hashing pattern used for passwords. In practise we could hash our password in this method before sending it to the server.
    self.token = md5("testing")
  },
  logout() {
    self.token = undefined
  },
}))


// Mobx Controller || Interface Exports
// =====================================================================================================================
// =====================================================================================================================
export interface IAuthStore extends Instance<typeof AuthStore> { }
export interface IAuthStoreSnapshotIn extends SnapshotIn<typeof AuthStore> { }
export interface IAuthStoreSnapshotOut extends SnapshotOut<typeof AuthStore> { }
