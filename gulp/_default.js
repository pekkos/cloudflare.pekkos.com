/**
 * DEFAULT TASK
 *
 * This is run with the '$ gulp' command
 */


/**
 * Require Gulp and common functions
 */

const gulp = require('gulp');
const runSequence = require('gulp4-run-sequence');


module.exports = function () {


  gulp.task('default', function (callback) {
    runSequence(
      'clean:site',
      'copy:src',
      callback
    )
  });


};
