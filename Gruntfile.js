
module.exports = function (grunt) {
  'use strict';
  require('time-grunt')(grunt);

	require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

	grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),

	  jshint: {
	    options: {
	      jshintrc: '.jshintrc',
	      reporter: require('jshint-stylish')
	    },
	    
	    all: {
	      src: [
	        'Gruntfile.js',
	        'app/scripts/{,*/}*.js'
	      ]
	    }
	  },

	  copy: {
		  dist: {
		    cwd: 'app',
		    src: [ '**','!styles/**/*.css','!scripts/**/*.js' ],
		    dest: 'docs',
		    expand: true
		  },
		  
		  fonts: {
		    files: [
		      {
		        //for bootstrap fonts
		        expand: true,
		        dot: true,
		        cwd: 'bower_components/bootstrap/dist',
		        src: ['fonts/*.*'],
		        dest: 'docs'
		      }, {
		        //for font-awesome
		        expand: true,
		        dot: true,
		        cwd: 'bower_components/font-awesome',
		        src: ['fonts/*.*'],
		        dest: 'docs'
		      }
		    ]
		  }
		},

		clean: {
		  build: {
		    src: [ 'docs/']
		  }
		},

		useminPrepare: {
		  html: 'app/index.html',
		  options: {
		    dest: 'docs'
		  }
		},

		// Concat
		concat: {
		  options: {
		    separator: ';'
		  },
		  
		  // dist configuration is provided by useminPrepare
		  dist: {}
		},

		// Uglify
		uglify: {
		  // dist configuration is provided by useminPrepare
		  dist: {}
		},

		cssmin: {
		  dist: {}
		},

		// Filerev
		filerev: {
		  options: {
		    encoding: 'utf8',
		    algorithm: 'md5',
		    length: 20
		  },
		  
		  release: {
		    // filerev:release hashes(md5) all assets (images, js and css )
		    // in dist directory
		    files: [{
		      src: [
		        'docs/scripts/*.js',
		        'docs/styles/*.css',
		      ]
		    }]
		  }
		},
		  
		// Usemin
		// Replaces all assets with their revved version in html and css files.
		// options.assetDirs contains the directories for finding the assets
		// according to their relative paths
		usemin: {
		  html: ['docs/*.html'],
		  css: ['docs/styles/*.css'],
		  options: {
		    assetsDirs: ['docs', 'docs/styles']
		  }
		},
	});

	grunt.registerTask('build', [
	  'clean',
	  'jshint',
	  'useminPrepare',
	  'concat',
	  'cssmin',
	  'uglify',
	  'copy',
	  'filerev',
	  'usemin'
  ]);

	grunt.registerTask('default',['build']);
};