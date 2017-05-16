//宣告window的東西不要放fonction裡面
var $win = $(window);

$(function(){
	//alert("123");

	//取消連結虛線
    $("a").focus(function(){
         $(this).blur();
     }); 
    $("button").focus(function(){
         $(this).blur();
     }); 

    //側邊選單offcanvas
  	// $('[data-toggle="offcanvas"]').click(function () {
   //  	$('.row-offcanvas').toggleClass('active');
  	// });

    //導覽列fixed        
    var $header = $('.navbar'),

        _headerHeight = $header.outerHeight(),

        _headerOffset = $header.offset();

    $win.on('scroll', function() {

        var _fixed = $header.hasClass('fixedtop');

        if ($win.scrollTop() > _headerOffset.top) {

            if (!_fixed) {

                // $('.header-mobile').addClass('fixedtop');

                $header.addClass('fixedtop');

                // $('body').css('margin-top', _headerHeight);

            }

        } else {

            if (_fixed) {

                $header.removeClass('fixedtop');

                // $('.header-mobile').removeClass('fixedtop');

                // $('body').css('margin-top', 0);



            };

        };
   });   

});