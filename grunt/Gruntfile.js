module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['../src/bootstrap.min.js','../src/Scroller.js', '../src/Navigation.js', '../src/ProgressAnimation.js'],
        dest: 'dist/build.js',
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/build.min.js': ['../src/bootstrap.min.js','../src/Scroller.js', '../src/Navigation.js', '../src/ProgressAnimation.js']
        }
      }
    },
    imagemin: {
      options: {
        cache: false
      },

      dist: {
        files: [{
          expand: true,
          cwd: '../css/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/'
        }]
      }
    },
    cssmin: {
    options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'dist/output.css': ['../css/main.css', '../css/img/img.css', '../css/fonts/fonts.css']
    }
  }
}
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'cssmin']);

};