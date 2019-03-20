const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

function compile() {
  return gulp
    .src('mixin.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: 'last 2 versions'
      })
    )
    .pipe(cssnano())
    .pipe(gulp.dest('./'));
}

exports.compile = compile;
