// Require Plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del');

// Configure Paths
var path = {
    sass: './src/sass',
    css: './css'
}

// Styles
gulp.task('styles', function () {
 return gulp.src(path.sass + '/ioGrid.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer(path.css.autoprefixer))
  .pipe(sourcemaps.write('./', { 'includeContent': false, 'sourceRoot': 'source' }))
  .pipe(gulp.dest(path.css))
  .pipe(notify({ message: 'Styles task complete.', onLast: true }))
});


// Clean
gulp.task('clean', function() {
  return del([path.css]);
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('styles');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch(path.sass + '/**/*.scss', ['styles']);

});
