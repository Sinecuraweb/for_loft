var gulp = require('gulp'),
	// concatCSS =require('gulp-concat-css'),
	// rename = require('gulp-rename'),
	// notify = require('gulp-notify'),
	minifyCSS = require('gulp-minify-css'),
	// autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync'),
  uglify = require('gulp-uglify'),
  gulpIf = require('gulp-if');




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


//min css
gulp.task('useref', function(){
	var assets = useref.assets();

	return gulp.src('app/*.html')
		.pipe(assets)
		.pipe(uglify())
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest('dist'))
});

//GULP-IF, ONLY MIN CSS
gulp.task('useref', function(){
	var assets = useref.assets();

	return gulp.src('app/*html')
	.pipe(assets)
	//if JS, then start uglify()
	.pipe(gulpIf('*.js', uglify()))
	.pipe(assets.restore())
	.pipe(useref())
	.pipe(gulp.dest('dist'))
});


gulp.task('useref', function(){
	var assets = useref.assets();

	return gulp.src('app/*html')
		.pipe(assets)
		//only css
		.pipe(gulpIf('*.css'),minifyCSS())
		//only JS
		.pipe(gulpIf('*.js',uglify()))
		.pipe(assets.restore())
		.pipe(useref())
		.pipe(gulp.dest('dist'))
});