'use strict';

var Z = require ('sanctuary-type-classes');

var S = require ('..');

var eq = require ('./internal/eq');


test ('curry2', function() {

  eq (typeof S.curry2) ('function');
  eq (S.curry2.length) (1);
  eq (S.curry2.toString ()) ('curry2 :: ((a, b) -> c) -> a -> b -> c');

  eq (S.curry2 (Z.concat) ('foo') ('bar')) ('foobar');

});
