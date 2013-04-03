var app = {
	
	init : function(){
		app.handelEvent();
	},
	
	handelEvent : function(){
		$(document).ready(function() {
			$(this).find(".header").load('html/header.html', function() {
				$(this).trigger("create");
			});
			$(this).find(".footer").load('html/footer.html', function() {
				$(this).trigger("create");
			});
	});
}
};

app.init();