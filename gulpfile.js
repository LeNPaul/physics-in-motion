//  Recreate this configuration
//  browser-sync start --proxy localhost:8080 --files="public/css/*.css", "public/js/*.js", "public/views/*.pug"  --no-notify

var gulp = require('gulp');
var del = require('del');
var cleanCSS = require('gulp-clean-css');
var terser = require('gulp-terser');

function clean(cb) {
  del('dist');
  cb();
}

function minifyCss(cb) {
  gulp.src('public/assets/css/**/*.css')
    //.pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/public/assets/css'));
  cb();
}

function minifyJs(cb) {
  gulp.src('public/assets/js/**/*.js')
    //.pipe(terser())
    .pipe(gulp.dest('dist/public/assets/js'));
  cb();
}

function minifyCssLibs(cb) {
	gulp.src('public/assets/libs/**/*.css')
    //.pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/public/assets/libs'));
  cb();
}

function minifyJsLibs(cb) {
	gulp.src('public/assets/libs/**/*.js')
    //.pipe(terser())
    .pipe(gulp.dest('dist/public/assets/libs'));
  cb();
}

function moveApplication(cb) {
  gulp.src(['**/*', '!public/assets/js/**/*.js', '!public/assets/css/**/*.css', '!public/assets/libs/**/*.css', '!public/assets/libs/**/*.js'])
    .pipe(gulp.dest('dist'));
  cb();
}

gulp.task('clean', gulp.series(clean))

gulp.task('build', gulp.parallel(moveApplication, minifyCss, minifyJs, minifyCssLibs, minifyJsLibs))
