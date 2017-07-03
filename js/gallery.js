$(function(){
//----------------nav---------------///////////

    //---------------hidden nav-------------
    $('#nav .gnb li').not('.home').on({
        'mouseenter':function(){
            $(this).find('.hidden_nav_wrap').stop().slideDown('slow');
        },'mouseleave':function(){
            $(this).find('.hidden_nav_wrap').stop().slideUp('slow');
        }
    })

    //------------hidden nav 제품정보 변경
    $('.hidden_nav_wrap .left_1 .lens_p a').on({
        'mouseenter':function(){
            //$('.right_1 .slr_c').css('opacity','0');
            //$('.right_1 .lens_c').show();
            $('.right_1 .lens_c').show().siblings().hide();
        }
    })
    $('.hidden_nav_wrap .left_1 .slr_p a').on({
        'mouseenter':function(){
            $('.right_1 .slr_c').show().siblings().hide();
        }
    })
    $('.hidden_nav_wrap .left_1 .sw_p a').on({
        'mouseenter':function(){
            $('.right_1 .sw_c').show().siblings().hide();
        }
    })
    $('.hidden_nav_wrap .left_1 .gal_p a').on({
        'mouseenter':function(){
            $('.right_1 .gal_c').show().siblings().hide();
        }
    })

    var nav_click = false;
    var b = $('#gnb_right');

    $('.gnb2 .gnb2_bar').on({
        'click':function(){
            if(nav_click ==false){
                b.css('right','0px')
                $('header').css('margin-left','-240px')
                $('html').css('overflow-y','hidden')
                $('.section_wrap').css('margin-left','-240px')
                nav_click = true;
            }else{
                b.css('right','-240px')
                $('header').css('margin-left','0')
                $('html').css('overflow-y','visible')
                $('.section_wrap').css('margin-left','0')
                nav_click = false;
            }


        }
    })

    var nav_right_click = true;
    $('#gnb_right>ul>li').on({
        'click':function(){
            $(this).addClass('on').siblings().removeClass('on');
            var c = $('#gnb_right li.on').find('.hidden_slide');
            var d = $('#gnb_right li').not('#gnb_right li.on').find('.hidden_slide');
            if(nav_right_click == true){
                c.stop().slideToggle();
                d.stop().slideUp();
                nav_right_click = false;
            }else{
                c.stop().slideToggle();
                d.stop().slideUp();
                nav_right_click = true;
            }
        }
    })

//----------------nav end---------------///////////

    //--------------search 버튼 클릭
    var sr = false;
    var a = $('.search_hidden');

    $('.search').on({
        'click':function(){
            if(sr==false){
                a.show();
                sr =true;
            }else{
                a.hide();
                sr=false;
            }
        }
    });

    //------------입장하기 text hover
    $('#intro .btn span').on({
        'mouseenter':function(){
            $(this).find('a').css({'color':'#000', 'transition':'0.3s'})
            .end().css({'border':'1px #000 solid','background-color':'#FFF', 'transition':'0.3s'})
        },
        'mouseleave':function(){
            $(this).find('a').css({'color':'#FFF', 'transition':'0.3s'})
            .end().css({'background':'#000', 'transition':'0.3s'})
        }
    })

    //-----------스크롤시 위로버튼 생성
    $('#scrolltotop').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#scrolltotop').fadeIn('slow');
        } else {
            $('#scrolltotop').fadeOut('slow');
        }
    });
    $('#scrolltotop a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //-----------스크롤 내릴시 nav 보이고 스크롤 올릴시 nav 숨김
    var lastScrollTop = 0, delta = 15;

    $(window).scroll(function(event){
        var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return; // 스크롤값을 받아서 리턴

    if ((st > lastScrollTop) && (lastScrollTop>0)) {
        $("#nav").css({"top":"-75px", "background":'none'});
         // 스크롤을 내렸을때 #nav CSS 속성중 top 값을 -75px로 변경
    } else {
        $("#nav").css("top","0px");
    }
    lastScrollTop = st;
    });
////////////////////////////////////////
    /*$('#intro .btn span').on({
        'click':function(){
            $('#intro').stop().slideUp('slow');
            $('#nav').css('background-color','#000');
            $('.section_wrap').css('background-color','#000');
            $('.slick-prev, .slick-next').css('background-color','#000');
            $('.gnb li>a, .sign li a').css('color','#FFF');
            $('#contents').css('display','block');
        }
    })*/



////////////////////////////////////////
    $(function() {
        $('.slick-center').trigger('click');
    })

    $('body').on({
        'click':function(){
            $('.slick-center').find('.back, .txt').show();
            $('.slick-active').not('.slick-center').find('.back, .txt').hide();
        },
        'swipe':function(){
            $('.slick-center').find('.back, .txt').show();
            $('.slick-active').not('.slick-center').find('.back, .txt').hide();
        }
    })



});
