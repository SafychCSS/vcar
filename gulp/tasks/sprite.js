module.exports = function() {
  $.gulp.task('sprite', function() {
    var spriteData = $.gulp.src('dev/static/img/sprite/icon/*.png')
    .pipe($.gp.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.scss',
      padding: 10
    }));
    return spriteData.pipe($.gulp.dest('dev/static/img/sprite/'));
  });
};