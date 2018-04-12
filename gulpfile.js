/*
var gulp = require('gulp');
var sass = require('gulp-sass');
//var cssnext = require('gulp-cssnext');
//var plumber = requier('gulp-plumber');
var spritesmith = require("gulp.spritesmith");

gulp.task('watch', function() {
	gulp.watch('./assets/scss/*.scss', ['sass']);
	gulp.watch('./_sprite/*', ['sprite']);
});

gulp.task('sass', function(){
	//scssディレクトリの指定
	gulp.src('./assets/scss/*.scss')
	//コンパイル実行.
	//.pipe(plumber())
	.pipe(sass({style: 'expanded'})) //出力形式の種類　#nested, compact, compressed, expanded.
	//.on('error', function(err){
	//	console.log(err.mesage);
	//})
	//.pipe(cssnext())
	//出力先の指定
	.pipe(gulp.dest('./css'));
});

//sprite
gulp.task('sprite', function () {
	var spriteData = gulp.src('./_sprite/*')
			.pipe(spritesmith({
					imgName: 'sprite.png',
					cssName: 'sprite.scss'
			}));
	spriteData.img.pipe(gulp.dest('./img'));
	spriteData.css.pipe(gulp.dest('./scss'));
});
*/

// 以下 https://qiita.com/M_amourr/items/09c8bb4e2b2981cafe7a
var gulp = require('gulp');
var sass = require('gulp-sass');

// SassとCssの保存先を指定
gulp.task('sass', function(){
  gulp.src('./assets/scss/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./assets/css/'));
});	

//自動監視のタスクを作成(sass-watchと名付ける)
gulp.task('sass-watch', ['sass'], function(){
  var watcher = gulp.watch('./assets/scss/*.scss', ['sass']);
  watcher.on('change', function(event) {
  });
});

// タスク"task-watch"がgulpと入力しただけでdefaultで実行されるようになる
gulp.task('default', ['sass-watch']);