var gulp = require('gulp');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var header = require('gulp-header');
var bowerJson = require('bower-json');

const paths = {
    src:  { js: './src/backand.provider.js' },
    dest: { js: './dist' }
};
const pkg = require('./package.json');
const banner = ['/*********************************************************',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @copyright Copyright (c) 2017 <%= pkg.author %> https://www.backand.com/',
  ' * @license <%= pkg.license %> (http://www.opensource.org/licenses/mit-license.php)',
  ' * @Compiled At: ' + new Date().toLocaleDateString(),
  '  *********************************************************/',
  ''].join('\n');

gulp.task('clean', function () {
  return gulp.src(paths.dest.js)
    .pipe(clean({force: true}));
});

gulp.task('bower', function () {
  return bowerJson.read('./bower.json', function (err, json) {
    if (err) {
        console.error('There was an error reading the file');
        console.error(err.message);
        return;
    }
    try {
      bowerJson.parse(json);
    } catch (err) {
      console.error('There was an error parsing the object');
      console.error(err.message);
    }
    console.log('JSON: ', json);
  });
});

gulp.task('build', ['clean'], function () {
  return gulp.src(paths.src.js)
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest(paths.dest.js))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename('backand.provider.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dest.js))
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*', ['build']);
});

gulp.task('default', ['build']);
