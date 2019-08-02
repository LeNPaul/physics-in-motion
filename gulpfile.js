var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function (done) {
  nodemon({
    script: './bin/www'
  });
  done();
});

//  Recreate this configuration
//  browser-sync start --proxy localhost:8080 --files="public/css/*.css", "public/js/*.js" "public/views/*.pug"  --no-notify
gulp.task('browser-sync', function (done) {
  browserSync({
    proxy: 'localhost:8080',
    files: ['public/*','views/*'],
    notify: false
  });
  done();
});
