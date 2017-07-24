function mainController($scope, $http, $rootScope, $location){
    
    setTimeout(function(){
        //SLIDERS
        $('.single-item').slick(); 
        //AUTOSUGGEST
        var availableTags = [
            "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C++",
            "Clojure",
            "COBOL",
            "ColdFusion",
            "Erlang",
            "Fortran",
            "Groovy",
            "Haskell",
            "Java",
            "JavaScript",
            "Lisp",
            "Perl",
            "PHP",
            "Python",
            "Ruby",
            "Scala",
            "Scheme"
        ];
        $("#tags").autocomplete({
            source: availableTags
        });
        //LOGIN
        $("#login").click(function(){
            $(".lightbox").fadeIn(800);
        });
        //CLOSE
        $("#close").click(function(){
            $(".lightbox").fadeOut(800);
        });
    }, 10);
    
}