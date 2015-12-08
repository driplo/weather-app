var gulp = require('gulp');

exports.paths = ['client/src/fonts/*'];

gulp.task('fonts', function () {
  gulp.src(exports.paths)
    .pipe(gulp.dest('client/public/font'));
});
