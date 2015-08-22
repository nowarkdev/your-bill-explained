var path = require('path');
var browserify = require('browserify');
var envify = require('envify');
var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpSourcemaps = require('gulp-sourcemaps');
var gulpMocha = require('gulp-mocha');
var gulpUtil = require('gulp-util');
var uglifyify = require('uglifyify');
var vinylSourceStream = require('vinyl-source-stream');
var watchify = require('watchify');
var gulpLivereload = require('gulp-livereload');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var fs = require('fs');
var babelify = require('babelify');
var babel = require('gulp-babel');

var buildConfig = {
  debug: process.env.NODE_ENV !== 'production',
  jsSrc: './app/components/application.js',
  jsDest: 'public/javascript',
  jsOutput: 'bundle.js',
  styleSrc: './app/stylesheets/style.scss',
  styleDest: './public/stylesheet/'
};

function getBundler(instance) {
  var bundler;

  if (instance) {
    bundler = instance(browserify(buildConfig.jsSrc, { cache: {}, packageCache: {}, fullPaths: false, debug: buildConfig.debug }));
  } else {
    bundler = browserify(buildConfig.jsSrc, { cache: {}, packageCache: {}, fullPaths: false, debug: buildConfig.debug });
  }

  if (!buildConfig.debug) {
    bundler.transform(envify);
    bundler.transform({global: true}, uglifyify);
  }
  bundler.transform(babelify);

  return bundler;
}

function update(bundler) {
  gulpUtil.log('Updating bundle...');

  bundler.bundle()
    .on('error', gulpUtil.log)
    .on('end', function () {gulpUtil.log('Updating bundle completed');})
    .pipe(vinylSourceStream(buildConfig.jsOutput))
    .pipe(gulp.dest(buildConfig.jsDest))
    .pipe(gulpLivereload());
}

function build(bundler) {
  gulpUtil.log('Bundling');
  bundler.bundle()
    .on('error', gulpUtil.log)
    .on('end', function () {gulpUtil.log('Bundle complete'); })
    .pipe(vinylSourceStream(buildConfig.jsOutput))
    .pipe(gulp.dest(buildConfig.jsDest));
}

function buildStyles() {
  return gulp.src(buildConfig.styleSrc)
    .pipe(gulpSourcemaps.init())
    .pipe(gulpSass())
    .pipe(gulpSourcemaps.write())
    .pipe(gulp.dest(buildConfig.styleDest));
}

function distStyles() {
  gulp.src(buildConfig.styleSrc)
    .pipe(gulpSass())
    .pipe(minifyCSS({keepBreaks: true}))
    .pipe(gulp.dest(buildConfig.styleDest));
}

gulp.task('css', function () {
  buildStyles().pipe(gulpLivereload());
});

gulp.task('dist', function () {
  build(getBundler());
  distStyles();
});

gulp.task('watch', function () {
  var watchAdmin = getBundler(watchify);
  gulp.watch('app/stylesheets/**/*', ['css']);
  gulpLivereload.listen();
  watchAdmin.on('update', function () {update(watchAdmin); });
  update(watchAdmin);
});

gulp.task('default', ['dist']);
