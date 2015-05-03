var gulp = require('gulp'); //build
var gutil= require('gulp-util'); //debugging
var source = require('vinyl-source-stream'); //throwing text from 1 to another
var browserify = require('browserify'); //make sure the build is in order
var watchify = require('watchify'); //automatically rerun gulp when change
var reactify = require('reactify'); //jsx to js

gulp.task('default', function(){
  //bundler - run browserify
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file){
    if (file) gutil.log('Recompiling ' + file);

    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };

  build();
  bundler.on('update', build);
});
