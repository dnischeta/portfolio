const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');


function style () {
  return gulp.src('./scss/**/*.scss')
  .pipe(sass())
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream())
}

function watch () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./script/*.js').on('change', browserSync.reload);
}

exports.watch = watch;
exports.style = style;
