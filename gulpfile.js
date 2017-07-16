var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var htmlmin = require('gulp-html-minifier');
var autoprefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');

gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'))
});

gulp.task('less', function() {
  gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(minifyCss())
    .pipe(autoprefix(('last 2 version')))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('scripts', function() {
  gulp.src('src/js/*')
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('images', function() {
  gulp.src('src/images/*')
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('video', function() {
  gulp.src('src/video/*')
    .pipe(gulp.dest('dist/video/'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/less/*.less', ['less']);
  gulp.watch('src/js/*', ['scripts']);
  gulp.watch('src/images/*', ['images']);
});

gulp.task('webserver', function() {
  gulp.src('dist/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['html', 'less', 'scripts', 'images', 'video', 'watch', 'webserver']);