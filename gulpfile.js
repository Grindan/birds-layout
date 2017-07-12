var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var minifyCss = require('gulp-minify-css');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});

gulp.task('less', function() {
  gulp.src('css/*.less')
    .pipe(less())
    .pipe(minifyCss())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});
 
gulp.task('watch', ['browserSync', 'less'], function() {
    gulp.watch('css/*.less', ['less']);
    gulp.watch('*.html', browserSync.reload);
})
 
gulp.task('default', ['less', 'watch']);