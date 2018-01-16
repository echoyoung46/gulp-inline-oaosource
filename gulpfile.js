var gulp = require('gulp'),
  gulpLoadPlugins = require('gulp-load-plugins'),
  plugins = gulpLoadPlugins();

var path = require('path');
var fs = require('fs');

var inlinesource = require('./index');
// var inlinesource = require('gulp-inline-source');
var htmlminify = require('gulp-htmlmin');
var minifyInline = require('gulp-minify-inline');
console.log(inlinesource);
console.log(111111);
gulp.task('inlinesource', function () {
  return gulp.src('./test/index.html')
    .pipe(plugins.charset({
      from: 'gbk',
      to: 'utf-8'
    }))
    .pipe(inlinesource())
    .pipe(htmlminify({
      collapseWhitespace: true
    }))
    .pipe(minifyInline())
    .pipe(plugins.charset({
      from: 'utf-8',
      to: 'gbk'
    }))
    .pipe(gulp.dest('./test/dist'));
});