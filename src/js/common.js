function active(ele,child){
	ele.find(child).hover(function(){
		ele.find(child).removeClass('active')
		$(this).addClass('active');
	});
}