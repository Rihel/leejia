$(function(){
	$('.flexslider').flexslider({
		animation: "slide",
		direction:"horizontal",
		easing:"swing",
		slideshowSpeed: 5500
	});
	active($('.nav'),'li');
	active($('.section-2-content'),'li');
	active($('.sign-box'),'a');
	active($('.users'),'li');
	active($('.section-5-list'),'li');


	$('.section-2-tab').find('span').click(function(){
		$('.section-2-tab').find('span').removeClass('active');
		$(this).addClass('active');
		$('.section-2').find('.section-2-content').stop().fadeOut();
		$('.section-2').find('.section-2-content').eq($(this).index()).stop().fadeIn();
	})
})

function active(ele,child){
	ele.find(child).hover(function(){
		ele.find(child).removeClass('active')
		$(this).addClass('active');
	});
}