var gulp = require('gulp');

gulp.task('html', function () {
    gulp.src('client/src/*.html')
        .pipe(gulp.dest('./client/public/'));
});
