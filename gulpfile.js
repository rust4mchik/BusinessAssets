var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  cssmin = require('gulp-clean-css'),
  sass = require('gulp-sass'),
  del = require('del'),
  browserSync = require('browser-sync').create();

function scss() {
  return gulp.src('./app/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: true
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream())
}

function clean() {
  return del('docs')
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./app/"
    }
  });
  gulp.watch('./app/scss/**/*.scss', scss)
  gulp.watch('./app/js/**/*.js', browserSync.reload)
  gulp.watch('./app/*.html').on('change', browserSync.reload)
}

gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, async function buildProject() {

  var buildImages = gulp.src([
    'app/images/**/*'
  ])
    .pipe(gulp.dest('docs/images'));

  var buildCss = gulp.src([
      'app/css/*.css'
    ])
    .pipe(gulp.dest('docs/css'));

  var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('docs/fonts'));

  var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('docs/js'));

  var buildLibs = gulp.src('app/libs/**/*')
    .pipe(gulp.dest('docs/libs'));

  var buildHTML = gulp.src('app/*.html')
    .pipe(gulp.dest('docs'));

}));