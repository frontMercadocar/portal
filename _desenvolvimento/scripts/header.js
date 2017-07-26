function mainController($scope, $http, $rootScope, $location){
    setTimeout(function(){        
        //AUTOSUGGEST
        var availableTags = [
            "pacote",
            "solucoes",
            "videos",
            "quemsomos",
            "missao",
            "oquehadenovo",
            "fiqueligado"
        ];
        $("#tags").autocomplete({
            source: availableTags,
            select: function (a, b) {
                window.location.href = b.item.value;
      
                //$(this).val(b.item.value);
                //$(".searchform1").submit()
            }
        });
        
    }, 10); 
    
    
    if($.cookie('nome')){
        $('.login-user').html('Seja bem vindo(a): <strong>' + $.cookie('nome') + '</strong> ! <div class="sair">Sair</div>');
    }

    $('.sair').click(function(){
        $.removeCookie('nome');
        location.reload();
    });
}