var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', logOut);

function logOut() {
  console.log("First Gulp task wrote this in the console. Oh boy!");
}
