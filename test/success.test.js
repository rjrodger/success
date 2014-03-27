/* Copyright (c) 2014 Richard Rodger, MIT License */
"use strict";


var assert = require('assert')

var success = require('..')

var tmp = {}

function f1( err ) { tmp.err = err }
function s1( arg ) { tmp.arg = arg }

var t1 = success( f1, s1 )

t1('f1')
assert.equal( 'f1', tmp.err )

t1(null,'a1')
assert.equal( 'a1', tmp.arg )



var t2 = success( s1 )

t2('f1')

t2(null,'a2')
assert.equal( 'a2', tmp.arg )
