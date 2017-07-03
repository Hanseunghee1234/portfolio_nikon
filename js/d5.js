$(function(){
    $('#nav').on({
        'mouseenter':function(){
            $(this).css({
                'background-color':'#000',
                'transition':'0.6s'
            });
        },'mouseleave':function(){
            $(this).css({
                'background':'#000',
                'transition':'0.6s'
            })
        }
    })

    $('.intro .btn span').on({
        'mouseenter':function(){
            $(this).find('a').css({'color':'#000', 'transition':'0.3s'})
            .end().css({'border':'1px #ffcc00 solid','background-color':'#ffcc00', 'transition':'0.3s'})
        },
        'mouseleave':function(){
            $(this).find('a').css({'color':'#FFF', 'transition':'0.3s'})
            .end().css({'border':'1px #000 solid','background':'#000', 'transition':'0.3s'})
        }
    })

    $('.select li').on({
        'click':function(){
            $(this).siblings().removeClass('on').siblings().addClass('on');
        }
    })
})
