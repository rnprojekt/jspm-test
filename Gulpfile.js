
var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');

global.port = process.env.PORT || 8086;

global.path = {
  source: './src',
  js_source: './src/**/*.js',
  build: './build',
  stage: './',
  index: './index.html',
  main: './src/main.js'
};

global.app = 'https://app.com';
global.api = 'https://api.com';

// Require all tasks
require( 'require-dir' )( './gulp_modules' );

// Init
gulp.task( 'init', [ ] );

// Default
gulp.task( 'default', [ 'init', 'connect', 'watch'] );
gulp.task( 'serv', [ 'default' ] );

// Bundle
gulp.task( 'build', [ 'build-index', 'build-jspm', 'build-jspm-post' ] );
