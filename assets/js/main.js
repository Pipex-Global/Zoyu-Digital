$(function(){

	$('#footer').load('footer.html');

	$( "#navbar a" ).each(function( index ) {

		$(this).click(function(e) {

			var _body_margin = $("body").css("margin-top");
			var _href_name = $( this ).attr("name");
			var _href_top = $('section[name="'+ _href_name +'"]').offset().top ;
			var _scroll_top = _href_top - parseInt(_body_margin);
			var _cur_top = $(this).offset().top;

			if (_cur_top != _scroll_top) { 
				$("html, body").animate({scrollTop:_scroll_top}, 500);
			}

			$(".in").collapse('toggle'); 
		
		}); // /onclick

	});   // /$.each 
})