var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var gulp = require('gulp');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {    
    return gulp.src('src/sass/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

//browserSync settings
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'src'
        }
    });
});

//watch settings
gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/*.js', browserSync.reload);
});

//set default task
gulp.task('default', ['watch']);