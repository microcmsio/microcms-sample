const gulp = require('gulp');
const ejs = require('gulp-ejs');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const request = require('request-promise');
const browser = require('browser-sync');

// サーバー起動
gulp.task('server', () => {
  browser({
    server: {baseDir: 'dist'},
    port: 5000
  });
});

// SCSSコンパイル
gulp.task('style', () => {
  gulp
    .src('src/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/styles'))
    .pipe(browser.stream());
});

// EJSコンパイル
gulp.task('ejs', () => {
  const ts = Date.now();
  gulp.src(['src/ejs/**/*.ejs', '!src/ejs/**/_*.ejs'])
    .pipe(ejs({}))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('style', 'ejs', 'server'));

gulp.watch('src/styles/**/*.scss', gulp.task('style'));
