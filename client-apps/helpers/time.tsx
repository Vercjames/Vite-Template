// Application Helpers || Time
// =================================================================================================
// sleep() allows for an await on the setTimeout Javascript Method =================================
export const sleep = async (time: number) => new Promise(resolve => {
  setTimeout(resolve, time)
})
