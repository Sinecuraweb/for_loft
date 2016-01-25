var gulp = require('gulp'),
	// concatCSS =require('gulp-concat-css'),
	// rename = require('gulp-rename'),
	// notify = require('gulp-notify'),
	// minifyCSS = require('gulp-minify-css'),
	// autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync');


gulp.task ('server',function(){
  browserSync({
    port:9000,
    server:{
      baseDir:'app'
    }
  });
});

gulp.task('watch', function(){
	gulp.watch([
    'app/*.html',
     'app/js/**/*.js',
     'app/css/**/*.css'
    ]).on('change', browserSync.reload);  
});

gulp.task ('default', ['server', 'watch']);



