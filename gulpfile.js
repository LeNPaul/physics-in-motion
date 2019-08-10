//  Recreate this configuration
//  browser-sync start --proxy localhost:8080 --files="public/css/*.css", "public/js/*.js", "public/views/*.pug"  --no-notify

var gulp = require('gulp');
var del = require('del');
var cleanCSS = require('gulp-clean-css');

function clean(cb) {
  del('dist');
  cb();
}

function minifyCss(cb) {
  gulp.src('public/assets/css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/public/assets/css'));
  cb();
}

gulp.task('build', gulp.series(clean, minifyCss))
