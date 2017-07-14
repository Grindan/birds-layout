var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var minifyCss = require('gulp-minify-css');
var autoprefix = require('gulp-autoprefixer');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
});

gulp.task('assets', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'));

  gulp.src('src/images/*')
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('less', function() {
  gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(minifyCss())
    .pipe(autoprefix(('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', ['browserSync', 'less'], function() {
    gulp.watch('src/less/*.less', ['less']);
    gulp.watch('*.html', browserSync.reload);
})
 
gulp.task('default', ['assets', 'less', 'watch']);