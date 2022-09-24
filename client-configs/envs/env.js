const fs = require("fs")
const path = require("path")
const environments = require("./envs.json")
const pjson = require("../../package.json")


// Environment Generation || Parse and Mapping Event
// =====================================================================================================================
// =====================================================================================================================
let str = `VITE_VERSION="${pjson.version}"\n`
process.argv.filter((item, index) => {
  if (index > 1) {
    let split= item.split("=");
    str += `${split[0]}="${split[1]}"\n`
  }
})


// Environment Generation || Node File System Event
// =====================================================================================================================
// =====================================================================================================================
fs.writeFile(path.join(__dirname, "../../.env"), str, err => {
  if (err) {
    console.error(err)
  }
  // file written successfully
})
