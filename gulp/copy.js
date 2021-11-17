/**
 * COPY
 *
 */


/**
 * Require Gulp and common functions
 */

const gulp = require('gulp');


/**
 * Task specific modules
 */

const copy = require('gulp-copy');




module.exports = function () {

    // Copy src files to site
    gulp.task('copy:src', function () {
        return gulp.src([
            'src/*'
        ])
            .pipe(copy('_site/', { prefix: 4 }))
            .on('end', function () {
                console.log('Files copied to _site')
            });
    });

};
