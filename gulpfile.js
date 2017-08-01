var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoPrefix = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('default', logOut);
gulp.task('html', updateHTML);
gulp.task('styles', updateCSS);
gulp.task('watch', watchApp);

function logOut() {
  console.log("First Gulp task wrote this in the console. Oh boy!");
}

function updateHTML() {
  console.log("We'll just console this message for now");
}

function updateCSS() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([autoPrefix, cssVars, nested, cssImport]))
    .pipe(gulp.dest('./app/temp/styles'));
}

function watchApp() {
  watch('./app/index.html', startHTML);
  watch('./app/assets/styles/**/*.css', startCSS);
}

function startHTML(){
  gulp.start('html');
}
 function startCSS() {
   gulp.start('styles');
 }
