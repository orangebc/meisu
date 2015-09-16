(function(){
	$(".header__navigation").hide();
	$("#navigation").click(function(){
		var toggled = $(".header__navigation");
		$(toggled).toggle("slow");
	});
})();