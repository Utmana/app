'use strict';
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var react = require('gulp-react');
var cache = require('gulp-cached');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var header = require('gulp-header');
var shell = require('gulp-shell');
var htmlReplace = require('gulp-html-replace');
var del = require('del');
var runSequence = require('run-sequence');
var stylish = require('jshint-stylish');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');
var pkg = require('./package');
var jshintConfig = pkg.jshintConfig;

var BANNER = [
  '/**',
  ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)',
  ' * Copyright <%= new Date().getFullYear() %> <%= pkg.author %>',
  ' * Licensed under <%= pkg.license %>',
  ' */',
  ''
].join('\n');

var PATH = {
  HTML: './index.html',
  SOURCE: './src/',
  TEST: './__tests__/',
  DIST: './dist/'
};

var handleErr = function (err) {
  console.error('ERROR' + (err.fileName ? ' in ' + err.fileName : ':'));
  console.error(err.message);
  this.end();
};

gulp.task('clean', function (cb) {
  del([PATH.DIST], cb);
});

jshintConfig.lookup = false;
gulp.task('jshint', function () {
  var stream = gulp.src(PATH.SOURCE + '*.js')
    .pipe(cache('jshint'))
    .pipe(react()).on('error', handleErr)
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter(stylish));

  if (process.env.CI) {
    stream = stream.pipe(jshint.reporter('fail'));
  }

  return stream;
});

gulp.task('webpack', function () {
  return gulp.src(PATH.SOURCE + 'app.js')
    .pipe(webpack(webpackConfig))
    .pipe(rename({
      basename: pkg.name
    }))
    .pipe(gulp.dest(PATH.DIST));
});

gulp.task('uglify', function () {
  return gulp.src(PATH.DIST + '*.js')
    .pipe(uglify()).on('error', handleErr)
    .pipe(rename({
      basename: pkg.name,
      suffix: '.min'
    }))
    .pipe(gulp.dest(PATH.DIST));
});

gulp.task('replaceHTML', function () {
  gulp.src(PATH.HTML)
    .pipe(htmlReplace({
      js: pkg.name + '.min.js'
    }))
    .pipe(gulp.dest(PATH.DIST));
});

gulp.task('banner', function () {
  return gulp.src(PATH.DIST + '*.js')
    .pipe(header(BANNER, {
      pkg: pkg
    }))
    .pipe(gulp.dest(PATH.DIST));
});

gulp.task('watch', function () {
  gulp.watch([PATH.SOURCE + '**/*.js', PATH.TEST + '**/*.js'], ['jshint', 'jest']);
});

gulp.task('jest', shell.task('node --harmony ./node_modules/.bin/jest'));

gulp.task('test', ['jest', 'watch']);

gulp.task('serve', shell.task('node server.js'));

gulp.task('build', ['clean'], function (cb) {
  runSequence(
    // 'jest',
    'webpack',
    'uglify',
    'banner',
    'replaceHTML',
    cb);
});

gulp.task('default', ['build']);
