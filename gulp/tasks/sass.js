var gulp       = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var glob       = require('glob');
var gulpif     = require('gulp-if');
var util = require('gulp-util');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var config     = require('../config').styles;

gulp.task('sass', function(){

  var context = util.env.context == undefined ? "dev" : util.env.context;
  compile( config.options[ context ] );

});

function compile( options ) {

  gulp.src( config.src )
      .pipe(sass().on('error', sass.logError))
      .pipe(gulpif( options.concat, concat( options.concatTarget )) )
      .pipe(gulpif( options.minify, minifyCss({
        compatibility: config.compatibility
      })))
      .pipe(gulpif( options.minify, rename({
        suffix: '.min'
      })))
      .pipe(gulp.dest( config.dest ));
}
