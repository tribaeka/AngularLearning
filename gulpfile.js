'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
    return gulp.src('./app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./app'));
});

gulp.task('js', function() {
    return gulp.src('./app/**/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function() {
    return gulp.src('./dist', { read: false })
        .pipe(clean());
});

gulp.task('default', gulp.parallel('clean', 'sass', 'js'));
