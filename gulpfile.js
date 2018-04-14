var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function (done) {
  nodemon({
    script: './bin/www'
  });
  done();
});

gulp.task('browser-sync', function (done) {
  browserSync({
    proxy: 'localhost:8080',
    files: ['public/*'],
    notify: false
  });
  done();
});
