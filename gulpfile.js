var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', logOut);
gulp.task('html', updateHTML);
gulp.task('watch', watchHTML );

function logOut() {
  console.log("First Gulp task wrote this in the console. Oh boy!");
}

function updateHTML() {
  console.log("We'll just console this message for now");
}

function watchHTML() {
  watch('./app/index.html', startHTML);
}

function startHTML(){
  gulp.start('html');
}
