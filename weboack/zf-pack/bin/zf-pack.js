#! /user/bin/env node

let path = require('path')

let config = require(path.resolve(__dirname))

let Compiler = require('../lib/Complier.js')

let complier = new Compiler(config)

complier.run()
