const { defineConfig } = require("cypress")

module.exports = defineConfig({
  baseUrl: "http://localhost:58000/",
  fixturesFolder: false,
  supportFile: false,
  pluginsFile: false,
  defaultCommandTimeout: 1000,
})