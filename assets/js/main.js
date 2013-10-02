$(function(){

    var c = $('#headerwrap').height();
    $(window).scroll(function(){
        var ScrollHight = $(this).scrollTop();
        if (ScrollHight > c) {
            $('.show-company').show();
        }else{
            $('.show-company').hide();
        };
    })
})