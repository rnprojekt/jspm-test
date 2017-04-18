var gulp = require('gulp');
var htmlreplace = require('gulp-html-replace');
var gitRev = require('git-rev');
var filter = require('gulp-filter');
var run = require('gulp-run');
var size = require('gulp-filesize');

// var connect = require('gulp-connect');
// var revReplace = require('gulp-rev-replace');
// var rename = require("gulp-rename");
// var gitRev = require('git-rev');
// var gulp = require('gulp');
// var gulp_jspm_build = require('gulp-jspm-build');
// var sourcemaps = require('gulp-sourcemaps');
// var size = require('gulp-filesize');
// var rev = require('gulp-rev');
// var filter = require('gulp-filter');
// var run = require('gulp-run');

// Index
gulp.task( 'build-index', function() {
  gitRev.short( function(short) {
    // var mainManifest = gulp.src('./build/main-rev-manifest.json');
    // var styleManifest = gulp.src('./build/style-rev-manifest.json');
    gulp.src(global.path.index)
      .pipe(htmlreplace( {
        'js': 'main.js',
        'env':  '<script>const globalConfig = { version: "'+short+'", env: "production", api: "https://'+global.api+'", app: "https://'+global.app+'"};</script>'
      }))
      // .pipe(revReplace({manifest: mainManifest}))
      // .pipe(revReplace({manifest: styleManifest}))
      .pipe(gulp.dest(global.path.build));
  });
});


// main.js
gulp.task( 'build-jspm', function(done) {
  var filter_js = filter(['src/main.js'], {restore: true});
  var filter_jsx = filter(['src/main.jsx'], {restore: true});
  return gulp
    .src( global.path.main )
    .pipe(size())
    .pipe(filter_js)
    .pipe( run( './node_modules/.bin/jspm bundle-sfx <%= file.path %> build/main.js --minify' ) )
    .pipe(filter_js.restore)
    .pipe(filter_jsx)
    .pipe( run( './node_modules/.bin/jspm bundle-sfx <%= file.path %>! build/main.js --minify' ) )
  ;
});

gulp.task( 'build-jspm-post', function(done) {
  // var filterMain = filter(['build/main.js'], {restore: true});
  return gulp
    .src('build/main.js')
    .pipe(size())
    // .pipe(filterMain)
    // .pipe(rev())
    // .pipe(gulp.dest(global.path.build))
    // .pipe(rev.manifest("main-rev-manifest.json"))
    // .pipe(gulp.dest(global.path.build))
    // .pipe(filterMain.restore)
  ;
});
