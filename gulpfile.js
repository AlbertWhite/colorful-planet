var gulp = require("gulp");   
var browserSync = require("browser-sync");
//the plugin is for pre-process the sass and scss files
var sass = require('gulp-sass');

var reload = browserSync.reload;

gulp.task("sass",function(){

  gulp.src('*.scss')//input
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))//set the output format
    .pipe(gulp.dest(''));

   reload();

});

gulp.task("server",function(){
  

  browserSync({
    server:{
      baseDir: "."//set the dir for index.html
    }
  });


gulp.watch("*.html",reload);//watch changes in html files and reload
gulp.watch("*.css",reload);
gulp.watch("*.js",reload);
gulp.watch("*.scss",["sass"]);//function sass will be 
});

