
const gulp = require('gulp')
const path = require('path')

const replace = require('gulp-replace')

let BUILD_PATH
switch (process.env.NODE_DEVICE) {
   case 'mobile':
       BUILD_PATH = path.resolve(__dirname, 'build/mobile')
       break
   case 'desktop':
       BUILD_PATH = path.resolve(__dirname, 'build/desktop')
       break
   default:
       throw new Error('设置面向的设备类型')
}


const APP_PATH = path.resolve(BUILD_PATH, 'app')
const CSS_PATH = path.resolve(BUILD_PATH, 'css')
const JS_PATH = path.resolve(BUILD_PATH, 'js')

gulp.task('replace:html', () => {
   return gulp.src(path.resolve(APP_PATH, '*.html'))
        .pipe(replace(/vendor\.js\?[0-9A-z]*/g, 'vendor.js'))

       .pipe(gulp.dest(APP_PATH))
 })


gulp.task('replace:js', () => {

    console.log('url', `${BUILD_PATH}/app/index.html`)
   return gulp.src(path.resolve(JS_PATH, '*.js'))
            .pipe(replace('/build/desktop/app/index.html', `${BUILD_PATH}/app/index.html`))
            .pipe(gulp.dest(JS_PATH))

 })



gulp.task('publish', gulp.parallel('replace:html', 'replace:js'))

//  gulp.series(
//        gulp.parallel('replace:html', 'replace:js'),
//      npm   'ftp:rmdir',
//        'ftp:upload'
//     )