'use strict';

const gulp = require('gulp');

gulp.task('default', function lintCssTask() {
  const gulpStylelint = require('gulp-stylelint');

  return gulp
    .src('styles/**/*')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});
