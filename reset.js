module.exports = {
  run: [
    {
      method: "fs.rm",
      params: {
        path: "app/node_modules"
      }
    },
    {
      method: "fs.rm",
      params: {
        path: "app/client/node_modules"
      }
    },
    {
      method: "fs.rm",
      params: {
        path: "app/server/node_modules"
      }
    },
  ]
}
