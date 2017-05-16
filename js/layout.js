var $win = $(window);

//////////////////////////////all common
$(function(){

	//<a> dash blur
    $("a").focus(function(){
         $(this).blur();
     }); 
    $("button").focus(function(){
         $(this).blur();
     }); 

    //backgroundcolor change
    $(".cube.a").click(function(){
      $("body").css("background-color","#FFFFFF");
    });
    $(".cube.b").click(function(){
      $("body").css("background-color","#F0F0F0");
    });
    $(".cube.c").click(function(){
      $("body").css("background-color","#DCE8F7");
    });
    //font size
    $(".fontsize .small").click(function(){
      $("body").css("font-size","14px");
    });
    $(".fontsize .normal").click(function(){
      $("body").css("font-size","16px");
    });
    $(".fontsize .big").click(function(){
      $("body").css("font-size","18px");
    });




});
//////////////////////////////mobile's footer 
$(function(){
  //footer(手機)打開
    var _width = $win.width();
    if(_width<1200){
            $('.footer_blockA').click(
                 function(){      
                     //摸到的第幾個
                     var NOW1=$(this).index();  
                      //自己的打開
                      $(".footer_blockA .footer_hidden").eq(NOW1).slideToggle(300);
                      //自己樣式toggle
                      $(".footer_blockA").eq(NOW1).find('.footer_nav_title').toggleClass('footer_nav_title_active');
                      //其他人收起來
                      $(".footer_blockA .footer_hidden").eq(NOW1).parent().siblings().find('.footer_hidden').slideUp(300);
                      //其他人樣式拿掉
                      $(".footer_blockA").eq(NOW1).siblings().find('.footer_nav_title').removeClass('footer_nav_title_active');
                 }
             );
            $('.footer_blockB').click(
                 function(){      
                     //摸到的第幾個
                     var NOW2=$(this).index();  
                      //自己的打開
                      $(".footer_blockB .footer_hidden").eq(NOW2).slideToggle(300);
                      //自己樣式toggle
                      $(".footer_blockB").eq(NOW2).find('.footer_nav_title').toggleClass('footer_nav_title_active');
                      //其他人收起來
                      $(".footer_blockB .footer_hidden").eq(NOW2).parent().siblings().find('.footer_hidden').slideUp(300);
                      //其他人樣式拿掉
                      $(".footer_blockB").eq(NOW2).siblings().find('.footer_nav_title').removeClass('footer_nav_title_active');
                 }
             );

    };
});

//section_contentTab1 in small size,hidden.
$(function(){

         var _width = $win.width();
            if(_width<=768){
                $(".section_contentTab1 .nav-tabs li").removeClass('active');
                $(".section_contentTab1 .tab-pane").removeClass('active');
            }else{
                $(".section_contentTab1 .nav-tabs li").first().addClass('active');
                $(".section_contentTab1 .tab-pane").first().addClass('active');
            };

});      

// $( window ).resize(function() {
  
//          var _width = $win.width();
//             if(_width<=768){
//                 $(".section_contentTab1 .tab-pane").removeClass('active');
//             }else{
//                 $(".section_contentTab1 .tab-pane").index().addClass('active');
//             };

// });      


////////////////////////////// offcanvas menu 
$(function(){ 

    //mobile menu offcanvas
    $('[data-toggle="offcanvas"]').click(function () {
      $('.row-offcanvas').toggleClass('active');
    });
    $('.offcanvasback').click(function () {
      $('.row-offcanvas').removeClass('active');
    });

  //offcanvas menu inside
            $('#sidenav_ul01 li').click(
                 function(){      
                   //摸到的第幾個
                     var NOW1=$(this).index();  
                      //自己的打開
                      $("#sidenav_ul01 li .sidenav_ul_in").eq(NOW1).slideToggle(300);
                      //自己樣式toggle
                      $("#sidenav_ul01>li").eq(NOW1).toggleClass('active');
                      //其他人收起來
                      $("#sidenav_ul01 li .sidenav_ul_in").eq(NOW1).parent().siblings().find('.sidenav_ul_in').slideUp(300);
                      // 其他人樣式拿掉
                      $("#sidenav_ul01>li").eq(NOW1).siblings().removeClass('active');
                 }
             );


});

////////////////////////////// pages left menu
$(function(){ 
  // pages left menu
            // 第1層打開
            $('#sidemenu>li>a').click(
                 function(){      
                   //摸到的第幾個
                     var NOW1=$(this).parent().index();  
                      //自己的打開
                      $("#sidemenu>li .sidenav_ul_in").eq(NOW1).slideToggle(300);
                      //自己樣式toggle
                      $("#sidemenu>li").eq(NOW1).toggleClass('openbox');
                      //其他人收起來
                      $("#sidemenu>li .sidenav_ul_in").eq(NOW1).parent().siblings().find('.sidenav_ul_in').slideUp(300);
                      // 其他人樣式拿掉
                      $("#sidemenu>li").eq(NOW1).siblings().removeClass('openbox');
                 }
             );


});

////////////////////////////// pages left menu in rwd
$(function(){ 
    $('.sidenavMenu').click(function () {
      $('.sidenavMenu').toggleClass('active');
      $(".sidenav_ul").slideToggle(300);
    });
});





