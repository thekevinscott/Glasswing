module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    testem: {
      options : {
        launch_in_ci : [
          'firefox',
          'safari'
        ]
      },
      main : {
        src: [ 'examples/*.html' ],
        dest: 'tests.tap'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    less: {
      development: {
        options: {
          paths: ["css"]
        },
        files: {
          "css/style.css": "less/style.less"
        }
      },
      production: {
        options: {
          paths: ["css"],
          yuicompress: true
        },
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },
    jshint: {
        options: {
          curly: true,
          eqeqeq: true,
          eqnull: true,
          browser: true,
        },
        uses_defaults: ['js/collections/*.js','js/models/*.js','js/views/*.js','js/test/*.js'],

      },
    watch: {
        // jshint : {
        //   files : ['js/collections/*.js','js/models/*.js','js/views/*.js','js/test/*.js'],
        //   tasks : ['jshint']
        // },
        less: {
          files: ['less/*.less'],
          tasks: ['less'],
          options: {
            nospawn: true,
          },
        },
      },
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-testem');





  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['less']);
  grunt.registerTask('default', ['testem']);
  // grunt.registerTask('default', ['jshint']);


};