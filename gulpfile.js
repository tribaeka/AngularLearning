'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');

var scssFilesPath = './app/**/*.scss';

gulp.task('sass', function() {
    return gulp.src(scssFilesPath)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./app'));
});

gulp.task('default', gulp.parallel('sass'));
