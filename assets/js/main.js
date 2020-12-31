// SMOOTH SCROLL
$(document).ready(function(){
        $(document).on("scroll",function(){
            $(this).scrollTop()>10?
            $("._menu").addClass("_menu_fixed"):
            $("._menu").removeClass("_menu_fixed")})});

// SLIDER 
$(document).ready(function(){
    $('._indx_shoe_sldr').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        dotsEach: true,
        autoplay:true,
        autoplayTimeout:4000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });


//What Client Says Slider
  $('._indx_clnt_sldr_active').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });


});



// MOBILE MENU
$("._icon_click").click(function() {
    $("._mbl_menu_main").addClass("_active");
    $("html").addClass("modal-open");
    $("._all_toggles").addClass("_active");
    $("._icon_click").addClass("_active");
    $("._icon_rmv").addClass("_active");
});

$("._icon_rmv").click(function() {
    $("._mbl_menu_main").removeClass("_active");
    $("html").removeClass("modal-open");
    $("._all_toggles").removeClass("_active");
    $("._icon_rmv").removeClass("_active");
    $("._icon_click").removeClass("_active");
});

// MOBILE MENU SEARCH
  $(document).ready(function(){
  $("._mbl_srch").click(function(){
    $("._mbl_menu_serch").toggleClass("_mbl_menu_serch_active");
  })

});

//DEKSTOP SEARCH INPIUT  
// $(document).ready(function(){
//   $("._menu_inpt_srch span").click(function(){
//     $("._menu_inpt_srch input").toggleClass("_menu_inpt_srch_actv");
//      $("._menu_lst").toggleClass("_menu_lst_actv");

//   })
// });

//DEKSTOP SEARCH INPIUT  
$("._icon_click_srch").click(function() {
    $("._menu_inpt_srch_all").addClass("_actv");
    $("._menu_lst").addClass("_actv");
    $("._icon_click_srch").addClass("_actv");
    $("._icon_rmv_srch").addClass("_actv");
});

$("._icon_rmv_srch").click(function() {
    $("._menu_inpt_srch_all").removeClass("_actv");
    $("._menu_lst").removeClass("_actv");
    $("._icon_click_srch").removeClass("_actv");
    $("._icon_rmv_srch").removeClass("_actv");
    
});

// MOBILE MENU ABOUT DROPDOWN
  $(document).ready(function(){
  $("._arrow_2").click(function(){
    $("._mbl_drpdwn").toggleClass("_mbl_drpdwn_active");
  })

});

   