const fs = require('node:fs')
const parse = require('joi-to-json')
const joiSchema = require('./input')

const jsonSchema = parse(joiSchema)

fs.writeFileSync(`${__dirname}/output.json`, JSON.stringify(jsonSchema, null, 2))