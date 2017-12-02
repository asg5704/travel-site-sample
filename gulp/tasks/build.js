const gulp = require('gulp'),
      optimizeImg = require('gulp-imagemin'),
      del = require('del'),
      usemin = require('gulp-usemin'),
      rev = require('gulp-rev'),
      cssnano = require('gulp-cssnano'),
      uglify = require('gulp-uglify'),
      pump = require('pump'),
      browserSync = require('browser-sync').create();

gulp.task('deleteFolder', ['icons'], function() {
  return del('./docs');
});

gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'docs'
    }
  });
});

gulp.task('copyGenFiles', ['deleteFolder'], function() {
  var paths = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ];
  return gulp.src(paths)
    .pipe(gulp.dest('./docs'))
})

gulp.task('optimizeImages', ['deleteFolder'], function() {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(optimizeImg({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('./docs/assets/images/'));
});

gulp.task('useMinTrigger', ['deleteFolder'], function() {
  gulp.start('usemin')
});

gulp.task('usemin', [ 'styles', 'scripts'], function() {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [rev(), cssnano()]
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('optimizeJS', ['usemin'], function(cb) {
  pump([
    gulp.src('./app/temp/scripts/*.js'),
    uglify(),
    gulp.dest('./docs/assets/scripts/')
  ], cb);
});

gulp.task('build', ['deleteFolder', 'copyGenFiles', 'optimizeImages', 'useMinTrigger', 'optimizeJS']);