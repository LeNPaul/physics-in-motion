var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function () {
  nodemon({
    script: './bin/www'
  });
});

gulp.task('browser-sync', function () {
  browserSync({
    proxy: 'localhost:8080',
    files: ['public/*'],
    notify: false
  });
});
