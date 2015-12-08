var gulp = require('gulp'),
  styles = require('./styles'),
  images = require('./images'),
  scripts = require('./scripts');

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('client/src/less/*.less', ['styles']);
  gulp.watch('client/src/index.html', ['html']);
  gulp.watch('client/src/images/*', ['images']);
  gulp.watch('client/src/js/**/*.js', ['scripts']);
});
