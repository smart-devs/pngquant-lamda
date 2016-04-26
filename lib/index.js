'use strict';

var BinWrapper = require('bin-wrapper');
var path = require('path');

module.exports = new BinWrapper()
	.dest(path.join(__dirname, '../vendor/bin'))
	.use('pngquant');
