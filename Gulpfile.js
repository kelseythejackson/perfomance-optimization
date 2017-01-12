const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    rename = require('gulp-rename'),
    image = require('gulp-image');

gulp.task('concat', () => {
    return gulp.src(['./src/js/jquery.js', './src/js/fastclick.js', './src/js/foundation.js', './src/js/foundation.equalizer.js', './src/js/foundation.reveal.js', './src/js/scripts.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./src/js/'));
});

gulp.task('uglify', ['concat'], () => {
   return gulp.src('./src/js/app.js')
       .pipe(uglify())
       .pipe(rename('app.min.js'))
       .pipe(gulp.dest('./public/js/'));
});

gulp.task('sass', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));
});

gulp.task('csso', ['sass'], () => {
    return gulp.src('./src/css/styles.css')
        .pipe(csso())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('shrink', ()=> {
    gulp.src('./src/img/photos/*')
        .pipe(image())
        .pipe(gulp.dest('./public/img/photos/'))
});