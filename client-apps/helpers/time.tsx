// Application Helpers || Time
// =================================================================================================
// setDelay() allows for an await on the setTimeout Javascript Method ==============================
export const setDelay = async (ms: number) => {
  // Where time/ms is measured in milliseconds
  return new Promise(resolve => setTimeout(resolve, ms))
}
