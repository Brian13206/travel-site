var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
          console.log("Huah- you created a Gulp task.")
          });

gulp.task('html', function() {
    console.log("Imagine something fucking up your html here.")
});

gulp.task('styles', function() {
    console.log("Imagine Sass or PostCSS tasks fucking up here.")
});

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    });
});

watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles')
});