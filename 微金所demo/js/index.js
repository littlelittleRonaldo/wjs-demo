$(function(){
    // 轮播图插件
    $('.carousel').carousel({
        interval: 2000
    });
    // 动态加载图片
    $(window).on('resize',function(){
        $('.carousel-inner .item').each(function(index,value){
            if ($(window).width() >= 768) {
                var imgSrc = $(this).data('largeImage');
                $(this).html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url("+imgSrc+")"));
            }else {
               var imgSrc = $(this).data('smallImage');
                $(this).html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'"/></a>');
            }
        })
    }).trigger('resize');
    // 移动端手指滑动
    var startX,endX;
    $('.carousel-inner')[0].addEventListener('touchstart',function(e){
        startX = e.targetTouches[0].clientX;
    })
    $('.carousel-inner')[0].addEventListener('touchend',function(e){
        endX = e.changedTouches[0].clientX;
        if (endX > startX) {
            $('.carousel').carousel('prev');
        }else if ((endX < startX)){
            $('.carousel').carousel('next');
        }
    });
    // 提示插件
    $('[data-toggle="tooltip"]').tooltip()
    // 产品块导航宽度计算
    var totalWidth=0;
    $('.nav_parent li').each(function(index,value){
        totalWidth += $(value).innerWidth();
    })
    $('.nav_parent ul').width(totalWidth);
    var myScroll = new IScroll('.nav_parent',{
        scrollX:true,
        scrollY:false
    })
})