$(function(){
    //----------------nav---------------///////////
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
    $(function() {
        $('.slick-center').trigger('click');
    })
    $('body').on({
        'click':function(){
            $('.slick-center').find('.back, .txt').show();
            $('.slick-slide').not('.slick-center').find('.back, .txt').hide();
        },
        'swipe':function(){
            $('.slick-center').find('.back, .txt').show();
            $('.slick-slide').not('.slick-center').find('.back, .txt').hide();
        }
    })
})
