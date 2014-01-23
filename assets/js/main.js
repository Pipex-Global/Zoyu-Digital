$(function(){

	/**
	 * ajax load footer
	 */
	$('#footer').load('footer.html');

	/**
	 * nav click event, 滑动效果
	 */
	$( "#navbar a" ).each(function( index ) {

		$(this).click(function(e) {

			/* body margin-top */
			var _body_margin = $("body").css("margin-top");
			/* 滑动到哪个section */
			var _href_name = $( this ).attr("name");
			/* 目标section距离顶端的距离 */
			var _href_top = $('section[name="'+ _href_name +'"]').offset().top ;
			/* 滑动的目标top */
			var _scroll_top = _href_top - parseInt(_body_margin);

			/* 如果当前已经在目标位置，则不动 */
			var _cur_top = $(this).offset().top;
			if (_cur_top != _scroll_top) { 
				$("html, body").animate({scrollTop:_scroll_top}, 500);
			}

			/* 在小屏幕下，点击nav元素后菜单收回 */
			$(".in").collapse('toggle'); 
		
		}); // /onclick

	});   // /$.each 
})