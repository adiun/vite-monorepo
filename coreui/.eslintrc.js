const scaffold = require("@adiun/vm-scaffold/.eslintrc.ui")

module.exports = {
  ...scaffold,
  parserOptions: {
    ...scaffold.parserOptions,
    project: "./tsconfig.json",
  },
}
