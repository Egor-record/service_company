var gulp = require('gulp'), // Сам Gulp
    concat = require('gulp-concat'),// Склейка файлов

    jade = require('gulp-jade'), // Jade обработчик html
    
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('gulp-cssnano'), //Минификация CSS
    autoprefixer = require('gulp-autoprefixer'), // Автопрефиксы CSS
    
    imagemin = require('gulp-imagemin'),// Сжатие JPG, PNG, SVG, GIF
    
    uglify = require('gulp-uglify'), // Минификация JS

    plumber = require('gulp-plumber'),
    watch = require('gulp-watch');


//Собираем Jade ( html )
gulp.task('jade', function() {
  return gulp.src(['./src/*.jade','!./src/_*.jade'])
    .pipe(plumber())
    .pipe(jade({
       pretty: true
    }))
    .on('error', console.log)
    .pipe(gulp.dest('./build/'));
  });


gulp.task('jade-templates', function() {
    return gulp.src(['./src/templates/**/*.jade','!./src/templates/**/_*.jade'])
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .on('error', console.log)
        .pipe(gulp.dest('./build/templates/'));
});


// Собираем CSS из SASS файлов
gulp.task('sass-dev', function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(plumber())
    // .pipe(sourcemaps.init())
    .pipe(sass({
      style: 'compressed',
      errLogToConsole: true,
      sourcemaps : false
      }))
    .on('error', sass.logError)
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: true
     }))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css/'));
});

gulp.task('sass-prod', function() {
  return gulp.src('src/sass/**/*.scss')
		.pipe(plumber())
    .pipe(sourcemaps.init())
    
    .pipe(sass({
      style: 'compressed',
      errLogToConsole: true
      }))

    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: true
     }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css/'));
});

//Сжатие изображений
gulp.task('img', function() {
  return gulp.src('src/img/**/**/**')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true}))
    .pipe(gulp.dest('build/img/'));
});

//Копируем JS
gulp.task('js', function(){
  return gulp.src('src/**/*.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('build/js/'));
});

// Favicon
gulp.task('favicon', function(){
  return gulp.src('src/favicon/*')
  .pipe(plumber())
  .pipe(gulp.dest('build/favicon/'));
});

// Fonts
gulp.task('api', function(){
  return gulp.src('src/api/*')
  .pipe(plumber())
  .pipe(gulp.dest('build/api/'));
});

// WATCH
gulp.task('default', ['jade-templates','jade', 'sass-dev','img','js','favicon', 'api'], function () {
    

    watch('./src/*.jade', function() {
      gulp.start('jade');
    });

    watch('./src/templates/**/*.jade', function() {
        gulp.start('jade-templates');
    });

    watch(["./src/sass/**/*.scss",'./src/sass/_*.scss'], function() {
      gulp.start('sass-dev');
    });
    
    watch('./src/**/*.js', function() {
      gulp.start('js');
    });


    watch('./src/img/**/*', function() {
      gulp.start('img');
    });

    watch('./src/favicon/*', function() {
      gulp.start('favicon');
    });

    watch('./src/fonts/*', function() {
      gulp.start('fonts');
    });

});