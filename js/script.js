$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times'); 
        // ^quand on appuie sur le menu def il se transforme en croix
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        // POUR AFFICHER LE BOUTON QUE QUAND ON EST EN BAS DE LA PAGE 
        
        if($(window).scrollTop()>0){
            $('.top').show();
        } else{
            $('.top').hide();
        }
    });

    // smooth scrolling

    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,

        },
          500, 
          'linear'

        );
        

    });


});


