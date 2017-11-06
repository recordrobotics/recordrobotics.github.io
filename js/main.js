function checkNavbar()
{
	if($(window).width() > 1000)
	{
		if($(window).scrollTop() > 40)
			$(".navbar").removeClass("navbar-tall");
		else if(!$(window).scrollTop())
			$(".navbar").addClass("navbar-tall");
	}
}
window.onload = function() {
	console.log("This is a test");
};
