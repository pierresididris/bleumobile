// Requis
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

// Include plugins
var plugins = require('gulp-load-plugins')();

// Variables de chemins
var src = { scss: './scss/**/' };
var dest = { css: './' };

// Check Gulp
gulp.task('hello', function(){
    console.log('Gulp launched!');
});

// Watch scss
gulp.task('watch', ['sass'], function(){
    gulp.watch([src.scss + '*.scss'], ['sass'], browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
    gulp.watch('**/*.php', browserSync.reload);
});

// Gulp sass compil
gulp.task('sass', function(){
    return gulp.src(src.scss + '*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(dest.css))
        .pipe(browserSync.reload({
        stream: true
    }))
});

// Sync Browser
gulp.task('browser-sync', function() {
    browserSync({
        proxy: 'localhost/bleumobile/',
        port: 8080,
        open: true,
        notify: false
    })
});

// End Tasks
gulp.task('default', ['hello', 'watch', 'sass', 'browser-sync'], function(){

});
