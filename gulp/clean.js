/**
 * CLEAN
 *
 */


/**
 * Require Gulp and common functions
 */

const gulp = require('gulp');


/**
 * Task specific modules
 */

const clean = require('gulp-clean');




module.exports = function () {

    /* Clean up _site */
    gulp.task('clean:site', function () {
        return gulp.src('_site/*', { read: false })
            .pipe(clean());
    });

};
