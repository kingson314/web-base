const gulp = require('gulp')
const concat = require('gulp-concat')
const plumber = require('gulp-plumber')
const fileinclude = require('gulp-file-include')
const connect = require('gulp-connect')
const proxy = require('http-proxy-middleware')
const htmlmin = require('gulp-htmlmin')
const minifyCSS = require('gulp-minify-css')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const sourcemaps = require("gulp-sourcemaps")
const gulpAutoprefixer = require('gulp-autoprefixer')
const autoprefixer = require('autoprefixer')
const cssnext = require('cssnext')
const precss = require('precss')

// const ENV = 'dev'

// const jsonPlaceholderProxy = proxy('/api', {
//   target: ENV == 'dev' ? 'http://localhost:8080/' : 'http://localhost:8081/',
//   changeOrigin: true, // for vhosted sites, changes host header to match to target's host
//   logLevel: 'debug',
//   pathRewrite: {
//     '^/api': '/app'
//   }
// })

const styles = {
  src: 'static/css/**/*',
  dest: 'dist/css/lib'
}
const script = {
  src: 'static/js/**/*',
  dest: 'dist/js/lib'
}

const scss = {
  src: 'src/scss/**/*',
  dest: 'dist/css'
}
const css = {
  src: 'src/css/**/*',
  dest: 'dist/css'
}
const js = {
  src: 'src/js/**/*',
  dest: 'dist/js'
}
const img = {
  src: 'src/img/**/*',
  dest: 'dist/img'
}

gulp.task('js', () => {
  return gulp.src(js.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    // .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(js.dest))
})

gulp.task('sass', () => {
  return gulp.src(scss.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpAutoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // .pipe(concat('main.css'))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(css.dest))
})

gulp.task('postcss', () => {
  const plugins = [
    autoprefixer({browsers: ['last 2 version']}),
    cssnext,
    precss,
  ]
  return gulp.src(css.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    // .pipe(concat('main.css'))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(css.dest))
})

gulp.task('fileinclude', () => {
  let options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
  };
  return gulp.src('src/**/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist'))
})

gulp.task('copy-img', () => {
  return gulp.src(img.src)
    .pipe(plumber())
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest(img.dest))
})

gulp.task('copy-script', () => {
  return gulp.src(script.src)
    .pipe(gulp.dest(script.dest))
})

gulp.task('copy-styles', () => {
  return gulp.src(styles.src)
    .pipe(gulp.dest(styles.dest))
})

gulp.task('copy-bgm', () => {
  return gulp.src('static/bgm/**/*')
    .pipe(gulp.dest('dist/bgm'))
})

//使用connect启动一个Web服务器
// gulp.task('connect', function() {
//   connect.server({
//     root: './dist',
//     livereload: true,
//     port: 3000,
//     middleware: function(connect, opt) {
//       return [jsonPlaceholderProxy]
//     }
//   })
// })

gulp.task('watch', () => {
  gulp.watch(scss.src, ['sass'])
  // gulp.watch(css.src, ['postcss'])
  // gulp.watch(js.src, ['js'])
  // gulp.watch(img.src, ['copy-img'])
  // gulp.watch(script.src, ['copy-script'])
  // gulp.watch(styles.src,['copy-styles'])
  // gulp.watch('src/**/*.html', ['fileinclude'])
})

gulp.task('devscss', ['sass', 'watch'])

gulp.task('default', ['js', 'sass', 'postcss', 'fileinclude','copy-img',  'copy-script','copy-styles', 'watch', 'connect'])
gulp.task('build', ['js', 'sass', 'postcss', 'fileinclude', 'copy-img', 'copy-script','copy-styles'])
