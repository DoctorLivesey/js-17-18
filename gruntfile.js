module.exports = function(grunt) {

  grunt.initConfig({
 
    concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['js/src/*.js'],
      dest: 'js/dest/script.main.js',
    },
  },
  uglify: {
      dist: {
        src: ['js/dest/script.main.js'],
        dest: 'js/dest/script.main.min.js'
      }
    },
    cssmin: {
      target: {
      files: {
      'css/dest/style.main.min.css': ['css/src/*.css']
    }
  }
}
    
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['concat','uglify', 'cssmin']);

};