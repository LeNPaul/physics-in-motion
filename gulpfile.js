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
    .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
    .pipe(gulp.dest('dist/public/assets/css'));
  cb();
}

function minifyJs(cb) {
  gulp.src('public/assets/js/**/*.js')
    .pipe(terser({
      keep_fnames: true,
      mangle: false
    }))
    .pipe(gulp.dest('dist/public/assets/js'));
  cb();
}

function moveApplication(cb) {
  gulp.src(['**/*',
  '!public/assets/js/**/*.js',
  '!public/assets/css/**/*.css',
  '!test/**',
  '!server/**',
  '!*.md',
  '!bower.json',
  '!package-lock.json',
  '!gulpfile.js'])
    .pipe(gulp.dest('dist'));
  cb();
}

gulp.task('clean', gulp.series(clean))

gulp.task('build', gulp.parallel(moveApplication, minifyCss, minifyJs))
