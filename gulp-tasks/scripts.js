var gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    order = require('gulp-order'),
    htmlmin = require('gulp-htmlmin');

exports.paths = [
  'node_modules/angular/angular.min.js',
  'node_modules/angular-route/angular-route.js',
  'node_modules/angular-sanitize/angular-sanitize.js'
];

gulp.task('vendors', function() {
  gulp.src(exports.paths)
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('client/public/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('client/public/js'))
});

gulp.task('scripts', function() {
  gulp.src('client/src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(order([
       "client/src/js/app.js",
       "client/src/js/**/*.js",
     ]))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('client/public/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('client/public/js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('client/public/js'))
    .pipe(notify('Scripts Done'));
});
