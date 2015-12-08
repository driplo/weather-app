var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    path = require('path'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    sourcemaps = require('gulp-sourcemaps'),
    util = require('gulp-util'),
    notify = require('gulp-notify'),
    cssmin = require('gulp-cssmin');

exports.paths = [
  'bower_components/normalize.css/normalize.css',
  'node_modules/weather-icons/css/weather-icons.min.css',
  'client/src/less/main.less'
];

gulp.task('styles', function () {
  gulp.src(exports.paths)
    .pipe(sourcemaps.init())
    .pipe(less({paths: [ path.join(__dirname, 'less', 'includes') ]}))
    .on('error', notify.onError({ message: util.log.message}))
    .pipe(autoprefixer())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('client/public/css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('client/public/css'))
    .pipe(notify('Style Done'));
});
