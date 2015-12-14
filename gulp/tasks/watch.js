var gulp   = require('gulp');
var util = require('gulp-util');
var config = require('../config');

gulp.task('watch', function(){

  gulp.watch(config.styles.src, ['sass']);
  gulp.watch(config.watch.files, ['compile']);

});
