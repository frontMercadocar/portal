'use strict'; 

define(['app'], function (app) {
    app.controller('TesteRecebimentoCargaCtrl', function ($scope, $rootScope) {
        
        $scope.textPage = 'Teste de Recebmento de Carga';
        
        $('#conferir').click(function(e){
            e.preventDefault();
            
            var formulario = $('#frm fieldset');

            var valorField;
            var arrayCerto  = [];

            for(var i = 0; i < formulario.length; i++){
                valorField = i + 1;

                var results = $('#fieldset_' + valorField + ' label input:checked').val();
                
                switch (valorField) {
                    case 1:
                        if(results == 2){
                            arrayCerto.push('correto');
                        }
                        break;
                    case 2:
                        if(results == 1){
                            arrayCerto.push('correto');
                        }
                        break;
                    case 3:
                        if(results == 4){
                            arrayCerto.push('correto');
                        }
                        break;
                    case 4:
                        if(results == 5){
                            arrayCerto.push('correto');
                        }
                        break;
                    case 5:
                        if(results == 2){
                            arrayCerto.push('correto');
                        }
                        break;
                    case 6:
                        if(results == 5){
                            arrayCerto.push('correto');
                        }
                        break;
                    case 7:
                        if(results == 3){
                            arrayCerto.push('correto');
                        }
                        break;
                    case 8:
                        if(results == 3){
                            arrayCerto.push('correto');
                        }
                        break;
                
                    default:
                        break;
                }                
            };

            if(arrayCerto.length === 0){
                alert(' :( ');                
            }
            else if(arrayCerto.length >= 5){
                alert(' Muito bom! ');
            }
            else if(arrayCerto.length === 8){
                alert(' Parabéns! ');
            }
            else if(arrayCerto.length <= 4){
                alert(' Ops! ');
            }           
        });


        $('#limpar').click(function(e){
            $('#frm input').prop('checked', false);
        });
        
    });
});
