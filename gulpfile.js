//gulpfile.js dans le dossier projet

var gulp = require('gulp'),
	sass=require('gulp-sass'),
	connect=require('gulp-connect'),
	bourbon = require('node-bourbon');

bourbon.with('sass');

gulp.task("compileSass", function(){
	gulp.src("sass/style.scss")
	//.pipe(sass())
	.pipe(sass({ includePaths: bourbon.includePaths}))
	.pipe(gulp.dest("css"))
	.pipe(connect.reload());
});

gulp.task("watch", ["connect"], function(){
	gulp.watch("sass/*.*css", ["compileSass"]);
});

gulp.task("connect", function(){
	connect.server({
		root: [__dirname],
		livereload: true,
		port:3000
	});
});

gulp.task("default", ["watch"], function(){});
