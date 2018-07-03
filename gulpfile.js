var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	imagemin = require('gulp-imagemin'),
	notify = require("gulp-notify"),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: './'
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

gulp.task('common-js', function () {
	return gulp
		.src(["assets/libs/modal-video/modal-video.js", "assets/js/include.js"])
		.pipe(concat("include.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("assets/js/min"));
});

gulp.task('js', ['common-js'], function () {
	return gulp.src([
			'assets/libs/modal-video/modal-video.js',
			'assets/js/common.min.js', //  в конце
		])
		.pipe(concat('include.min.js'))
		// .pipe(uglify()) // Минимизировать весь js?
		.pipe(gulp.dest('assets/js/min'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('scss', function () {
	return gulp.src('assets/scss/**/*.scss')
		.pipe(sass({
			outputStyle: 'expanded'
		}).on("error", notify.onError()))
		.pipe(rename({
			suffix: '.min',
			prefix: ''
		}))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleanCSS()) // Опционально, закомментировать при отладке
		.pipe(gulp.dest('assets/css'))
		.pipe(browserSync.stream())
});

gulp.task('watch', ['scss', 'js', 'browser-sync'], function () {
	gulp.watch('assets/scss/**/*.scss', ['scss']);
	gulp.watch(['assets/js/libs/**/*.js', 'assets/js/include.js'], ['js']);
	gulp.watch('*.html', browserSync.reload);
});

gulp.task('build', [ 'scss', 'js'], function () {

	var buildFiles = gulp.src([
		'/*.html',
		'/.htaccess',
	]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'assets/css/style.min.css',
	]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'assets/js/min/include.min.js',
	]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'assets/fonts/**/*',
	]).pipe(gulp.dest('dist/fonts'));

});

gulp.task('default', ['watch']);