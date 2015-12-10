var gulp = require('gulp');

require('require-dir')('./gulp-tasks');
gulp.task('default', [
  'images',
  'styles',
  'fonts',
  'vendors',
  'scripts',
  'serve'
]);
