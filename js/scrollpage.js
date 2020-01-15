$(document).ready(function (){
    $('.nav-toggle').click(function() {
        $('.responsive-nav').addClass('unfold');
        $('.responsive-nav').slideToggle(500);
    });

    $(window).scroll(function(){
        if($(window).scrollTop()){
            $('.jdev-navigation').addClass('black');
            $('.nav-mobile').addClass('adjust-mobile');
        }else{
            $('.jdev-navigation').removeClass('black');

        }
    }); 

    $("#cta-btn").click(function (){
        $('html, body').animate({
            scrollTop: $("#aboutScroll").offset().top
        }, 2000);
       
    });

    $("#home").click(function (){
            $('html, body').animate({
                scrollTop: $("#homeScroll").offset().top
            }, 2000);
           
            var navresponsive = document.getElementById('nav-responsive');
            navresponsive.style.display = "none";
            navresponsive.style.transition = "0.8s all ease-in";
    });
    
    $("#about").click(function (){
            $('html, body').animate({
                scrollTop: $("#aboutScroll").offset().top
            }, 2000);

            var aboutid = document.getElementById('aboutScroll');
            aboutid.style.transition = "0.5s all ease-in-out";

            var navresponsive = document.getElementById('nav-responsive');
            navresponsive.style.display = "none";
            navresponsive.style.transition = "0.8s all ease-in";  
           
            
            
    });

    $("#service").click(function (){
            $('html, body').animate({
                scrollTop: $("#serviceScroll").offset().top
            }, 2000);

            var servicesid = document.getElementById('services-title');
            servicesid.style.display = "block";

            var navresponsive = document.getElementById('nav-responsive');
            navresponsive.style.display = "none";
            navresponsive.style.transition = "0.8s all ease-in";
    });

    $("#projects").click(function (){
            $('html, body').animate({
                scrollTop: $("#projectsScroll").offset().top
            }, 2000);

            var navresponsive = document.getElementById('nav-responsive');
            navresponsive.style.display = "none";
            navresponsive.style.transition = "0.8s all ease-in";
    });

    $("#contact").click(function (){
            $('html, body').animate({
                scrollTop: $("#contactScroll").offset().top
            }, 2000);

            var navresponsive = document.getElementById('nav-responsive');
            navresponsive.style.display = "none";
            navresponsive.style.transition = "0.8s all ease-in";
    });
    

    $("#topBtn").click(function (){
        $('html, body').animate({
            scrollTop: $("#homeScroll").offset().top
        }, 1000);
    });


});