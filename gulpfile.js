const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// This function compiles the SCSS file into CSS
// and saves it to the css folder
// The 'sass' function takes the source file (styles.scss)
// and compiles it into CSS, then the 'dest' function
// saves the compiled CSS file into the 'css' folder
function compileSass() {
  return src('styles.scss') 
    .pipe(sass())
    .pipe(dest('css')); 
}


//to update the css file when the scss file changes
// this will watch the styles.scss file for changes and recompile it
// into css whenever it changes

function watchFiles() {
  watch(['styles.scss'], compileSass); 
}

exports.default = series(compileSass, watchFiles); // this will run the compileSass function and then watch for changes
// to run this gulp file, use the command 'gulp' in the terminal