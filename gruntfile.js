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
                    'content/css/main.css': '_desenvolvimento/sass/main.scss',
                    'content/css/home.css': '_desenvolvimento/sass/home.scss',
                    'content/css/pacote.css': '_desenvolvimento/sass/pacote.scss',
                    'content/css/conferencia_encomenda.css': '_desenvolvimento/sass/conferencia_encomenda.scss',
                    'content/css/contagem_estoque.css': '_desenvolvimento/sass/contagem_estoque.scss',
                    'content/css/inventario.css': '_desenvolvimento/sass/inventario.scss',
                    'content/css/solucoes.css': '_desenvolvimento/sass/solucoes.scss',
                    'content/css/oquehadenovo.css': '_desenvolvimento/sass/oquehadenovo.scss',
                    'content/css/fiqueligado.css': '_desenvolvimento/sass/fiqueligado.scss',
                    'content/css/dicas.css': '_desenvolvimento/sass/dicas.scss',
                    'content/css/videos.css': '_desenvolvimento/sass/videos.scss',
                    'content/css/testeconhecimento.css': '_desenvolvimento/sass/testeconhecimento.scss',
                    'content/css/testerecebimentocarga.css': '_desenvolvimento/sass/testerecebimentocarga.scss',
                    'content/css/quemsomos.css': '_desenvolvimento/sass/quemsomos.scss',
                    'content/css/missao.css': '_desenvolvimento/sass/missao.scss' 
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
                    'scripts/views/dcc/dcc.js': ['_desenvolvimento/scripts/views/dcc/dcc.js'],
                    'scripts/views/pacote/pacote.js': ['_desenvolvimento/scripts/views/pacote/pacote.js'],
                    'scripts/views/conferencia_encomenda/conferencia_encomenda.js': ['_desenvolvimento/scripts/views/conferencia_encomenda/conferencia_encomenda.js'],
                    'scripts/views/contagem_estoque/contagem_estoque.js': ['_desenvolvimento/scripts/views/contagem_estoque/contagem_estoque.js'],
                    'scripts/views/inventario/inventario.js': ['_desenvolvimento/scripts/views/inventario/inventario.js'],
                    'scripts/views/solucoes/solucoes.js': ['_desenvolvimento/scripts/views/solucoes/solucoes.js'],
                    'scripts/views/oquehadenovo/oquehadenovo.js': ['_desenvolvimento/scripts/views/oquehadenovo/oquehadenovo.js'],
                    'scripts/views/fiqueligado/fiqueligado.js': ['_desenvolvimento/scripts/views/fiqueligado/fiqueligado.js'],
                    'scripts/views/dicas/dicas.js': ['_desenvolvimento/scripts/views/dicas/dicas.js'],
                    'scripts/views/videos/videos.js': ['_desenvolvimento/scripts/views/videos/videos.js'],
                    'scripts/views/testeconhecimento/testeconhecimento.js': ['_desenvolvimento/scripts/views/testeconhecimento/testeconhecimento.js'],
                    'scripts/views/testerecebimentocarga/testerecebimentocarga.js': ['_desenvolvimento/scripts/views/testerecebimentocarga/testerecebimentocarga.js'],
                    'scripts/views/quemsomos/quemsomos.js': ['_desenvolvimento/scripts/views/quemsomos/quemsomos.js'],
                    'scripts/views/missao/missao.js': ['_desenvolvimento/scripts/views/missao/missao.js']
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