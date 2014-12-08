var gulp = require('gulp'),
	gutil = require('gulp-util');

gulp.task('log', function() {
	gutil.log('Damn it works!!');
	gutil.beep();
});