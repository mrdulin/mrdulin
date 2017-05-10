var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('examples')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      open: true
    }));
});
