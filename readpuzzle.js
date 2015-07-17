'use strict';

var fs = require('fs');
var pz = require('./puzzle.json');

var context = pz.easy[0].context;
var shudu = {};

// heng
for(var i = 0; i < 9; i++) {
    shudu['h' + (i + 1)] = context[i];
}

// zong
for(var i = 0; i < 9; i++) {
    shudu['z' + (i + 1)] = [];
}
for(var i = 0; i < 9; i++) {    // h
    for(var j = 0; j < 9; j++) {   // z
        shudu['z' + (j + 1)][i] = context[i][j];
    }
}

// gongge
for(var i = 0; i < 9; i++) {
    shudu['g' + (i + 1)] = [];
}
for

console.error(shudu);
