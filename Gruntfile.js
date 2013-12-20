module.exports = function(grunt){

	grunt.initConfig({
  imagemin: {
    png: {
      options: {
        optimizationLevel: 7
      },
      files: [
        {
         //  Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
         cwd: '/home/pavithra/Pictures/europe20',
         src: ['**/*.png'],
         // Could also match cwd line above. i.e. project-directory/img/
         dest:  '../img/',
          ext: '.png'
        }
      ]
    },
    jpg: {
      options: {
        progressive: true
      },
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: '/home/pavithra/Pictures/europe20/',
          src: ['*.jpg'],
          // Could also match cwd. i.e. project-directory/img/
          dest: '../img/',
          ext: '.jpg'
        }
      ]
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('imagemin', ['imagemin']);
};
