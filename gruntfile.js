module.exports = function (grunt) {
    
    'use strict';
    
    grunt.initConfig({
        watch: {                
            css: {
                files: '_desenvolvimento/sass/**/*.{scss,sass}',
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            script: {
                files: '_desenvolvimento/scripts/**/*.js',
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            default: {
                options: {
                    style: 'compressed',
                    sourceMap: true,
                    noCache: true
                },       
                files: {
                    'content/css/main.css': '_desenvolvimento/sass/main.scss'
                }
            }     
        },
        uglify: {
            options: {
                beautify: false,
                mangle: false,
                sourceMap: true,
            },
            my_target: {
                files: {
                    'scripts/app.js': ['_desenvolvimento/scripts/app.js'],
                    'scripts/main.js': ['_desenvolvimento/scripts/main.js'],
                    'scripts/header.js': ['_desenvolvimento/scripts/header.js'],
                    'scripts/views/home/home.js': ['_desenvolvimento/scripts/views/home/home.js'],
                    'scripts/views/dcc/dcc.js': ['_desenvolvimento/scripts/views/dcc/dcc.js']
                },
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '_desenvolvimento/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'content/images/'
                }]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
      
    grunt.registerTask('start', ['uglify', 'imagemin', 'sass','watch']);
};