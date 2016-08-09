// @flow
var moduleName = process.argv[2]
require('flow-remove-types/register')
require('./' + moduleName)
