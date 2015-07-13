'use strict';
/**
*   @module: Gulpfile
*   @description Glup tasks define here.
*   @module gulpfilejs
*   @requires gulp
*   @requires gulp-uglify
*   @requires gulp-concat
*   @requires gulp-clean
*   @requires gulp-mocha
*/
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanup = require('gulp-clean');
var mocha = require('gulp-mocha');
var jsdoc = require('gulp-jsdoc');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');

//Define the resource files for piping the gulp tasks
var paths = {
    jsdocpath: ['config/*.js', 'resources/*.js', 'services/*.js', '*.js'],
    tests: ['test/app.js'] //, 'services/service.js'
};

//Define the task for testing the service, controllers test cases
gulp.task('mocha', function () {
    gulp.src(paths.tests)
        .pipe(mocha({reporter: 'spec'}));
});

// Checks the docs and cleans it first
gulp.task('clean-doc', function () {
    return gulp.src('docs', { read: false })
      .pipe(cleanup());
});

//Creates the docs for the applications code
gulp.task('doc', ['clean-doc'], function () {
    return gulp.src(paths.jsdocpath)
      .pipe(jsdoc('docs'));
});

//Defined all the gulp task here
gulp.task('default', ['watch']);
gulp.task('docs', ['doc']);
gulp.task('test', ['mocha']);
