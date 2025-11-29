module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  },

  {
    "method": "shell.run",
    "params": {
      "path": "app",
      "chain": true,
      "input": null,
      "message": "npm install"
    }
  },
  {
    "method": "shell.run",
    "params": {
      "path": "app/client",
      "chain": true,
      "input": null,
      "message": "npm install"
    }
  },
  {
    "method": "shell.run",
    "params": {
      "path": "app/server",
      "chain": true,
      "input": null,
      "message": "npm install"
    }
  }

  ]
}
