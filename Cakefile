#+--------------------------------------------------------------------+
#| Cakefile
#+--------------------------------------------------------------------+
#| Copyright DarkOverlordOfData (c) 2012
#+--------------------------------------------------------------------+
#|
#| This file is a part of liquid.coffee
#|
#| liquid.coffee is free software; you can copy, modify, and distribute
#| it under the terms of the MIT License
#|
#+--------------------------------------------------------------------+
#
# Cakefile
#

fs = require('fs')
util = require 'util'
{exec} = require "child_process"
{nfcall} = require 'q'


#  --------------------------------------------------------------------

#
# Run all tests
#
#
task "test", "run tests", ->

  REPORTER = "nyan"
  exec "NODE_ENV=test
      ./node_modules/.bin/mocha
      --compilers coffee:coffee-script
      --reporter #{REPORTER}
      --require coffee-script
      --require test/test_helper.js
      --recursive
      ", (err, output) ->
    console.log output
    console.log err.message if err?


#  --------------------------------------------------------------------

#
# Build Source
#
#
task 'build:src', 'Build the Liquid source', ->

  start = new Date().getTime()

  nfcall exec, 'coffee -o lib -c src'

  .then ->
      nfcall exec, 'browserify lib/liquid.js --debug --standalone Liquid > dist/liquid.coffee-0.0.9.dbg.js'

  .then ->
      nfcall exec, 'browserify lib/liquid.js --standalone Liquid | uglifyjs > dist/liquid.coffee-0.0.9.min.js'

  .then ->
      nfcall exec, 'browserify lib/liquid.js --standalone Liquid > dist/liquid.coffee-0.0.9.js'

  .fail ($err) ->
      util.error $err

  .done ($args) ->
      util.log $text for $text in $args when not /\s*/.test $text
      util.log "Compiled in #{new Date().getTime() - start} ms"

