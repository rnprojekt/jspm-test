var gulp = require('gulp');
var path = require('path');
var connect = require('gulp-connect');
var connectHistory = require('connect-history-api-fallback');


var history = new connectHistory( {
  verbose: false,
  rewrites: [
    { from: /^\/team\/[a-zA-z0-9-_]+\/[a-zA-z0-9-_]+\/{0,1}$/,
      to: '/'
    },
    { from: /^\/team\/[a-zA-z0-9-_]+\/[a-zA-z0-9-_]+\/.*$/,
      to: function(context) {
        return context.parsedUrl.pathname.replace(/^\/team\/[a-zA-z0-9-_]+\/[a-zA-z0-9-_]+\//,'/');
      }
    }
  ]
});

gulp.task( 'connect', function () {
  connect.server({
    root: global.path.stage,
    livereload: false,
    port: global.port,
    middleware: function(connect, opt) {
      return [ history ];
    }
  });
});
