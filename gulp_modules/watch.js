var gulp = require('gulp');
var path = require('path');
var util = require('gulp-util');

var logChanges = function(event) {
  util.log( util.colors.green('Change ' + event.type + ': ') +
            util.colors.magenta(path.basename(event.path) ) );
};

// Watch tasks
gulp.task( 'watch', function() {
  gulp.watch(global.path.index, []).on('change', logChanges);
  gulp.watch(global.path.js_source, []).on('change', logChanges);
});
