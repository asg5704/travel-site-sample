const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssvars = require('postcss-simple-vars'),
      nested = require('postcss-nested'),
      cssimport = require('postcss-import'),
      hexrgba = require('postcss-hexrgba'),
      mixins = require('postcss-mixins');

gulp.task('styles', function() {
  //Implement PostCSS
  //Gulp.src - where to get from Asynchronous
  return gulp.src('./app/assets/css/styles.css')
    .pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on('error', function(err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles/'));
});