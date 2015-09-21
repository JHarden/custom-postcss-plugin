'use strict';

/*
npm install the following:
*/
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var concatCss = require('gulp-concat-css');
var post = require('postcss');

/*
import custom plugin from file /custom_modules/precision.js
refer to: https://github.com/postcss/postcss/blob/master/docs/guidelines/plugin.md
for best practices and guideline on how to create plugins
*/

var precision = require('./custom_modules/precision');  //import custom plugin

post().use(precision);
// Make PostCSS aware of this plugin.
gulp.task('styles',function(){

   return gulp.src('./style/base.css')
       .pipe(postcss([precision()]))
       .pipe(gulp.dest('./style/output'));

});

gulp.task('concat',function(){
   return gulp.src('./style/partials/*.css')
       .pipe(concatCss('./style/output/bundle.css'))
       .pipe(gulp.dest('out/'));

});