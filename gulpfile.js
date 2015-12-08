var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./client/public/"
    },
    files: ["client/public/css/*.css", "client/public/*.html", "client/public/js/*.js"],
    host: "localhost:3000"
  });
});

require('require-dir')('./gulp-tasks');
gulp.task('default', [
  'images',
  'styles',
  'fonts',
  'vendors',
  'scripts',
]);
