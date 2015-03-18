// Listen for and handle relevant events
$( document ).ready( function() {
	
    //rotation speed and timer of banner
    var speed = 5000;
    var run = setInterval('rotate()', speed);   
               
	//Execute on right nav click of the banner
	$('#right' ).on( 'click', function() {
		var $cur= $(".all-images img.active_bar");
		var $curText =$(".slide_text .slide.show");
		var $curNav= $(".nav-dots div.active");
		if($cur.is( ".all-images img:last-child" )){
			$(".all-images img:first-child" ).addClass('active_bar');
			$(".slide_text .slide:first-child").addClass('show');
			$(".nav-dots div:first-child").addClass('active');
		}
		else{
			$(".all-images img.active_bar").next().addClass('active_bar');
			$(".slide_text .slide.show").next().addClass('show');
			$(".nav-dots div.active").next().addClass('active');
		}
		$cur.removeClass('active_bar');
		$curText.removeClass('show');
		$curNav.removeClass('active');
	});
	//Execute on left nav click of the banner 
	$( '#left' ).on( 'click', function() {
		var $cur= $(".all-images img.active_bar");
		var $curText =$(".slide_text .slide.show");
		var $curNav= $(".nav-dots div.active");
		if($cur.is( ".all-images img:first-child" )){
			$(".all-images img:last-child" ).addClass('active_bar');
			$(".slide_text .slide:last-child").addClass('show');
			$(".nav-dots div:last-child").addClass('active');
		}
		else{
			$(".all-images img.active_bar").prev().addClass('active_bar');
			$(".slide_text .slide.show").prev().addClass('show');
			$(".nav-dots div.active").prev().addClass('active');
		}
		$cur.removeClass('active_bar');
		$curText.removeClass('show');
		$curNav.removeClass('active');
	});
	//Stop the curosuel
    $('.frame').hover(
        function() {
            clearInterval(run);
        },
        function() {
            run = setInterval('rotate()', speed);   
        }
    );
	//Navigation Dots click mapping
	$( ".nav-dots div" ).click(function() {
		clearInterval(run);
		var $cur= $(".all-images img.active_bar");
		var $curText =$(".slide_text .slide.show");
		var $curNav= $(".nav-dots div.active");
		// `this` is the DOM element that was clicked
		var index = $( ".nav-dots div" ).index( this );
		$cur.removeClass('active_bar');
		$curText.removeClass('show');
		$curNav.removeClass('active');
		$($(".all-images img")[index]).addClass('active_bar');
		$($(".slide_text .slide")[index]).addClass('show');
		$($(".nav-dots div")[index]).addClass('active');                 
		run = setInterval('rotate()', speed);   
	});
	// Setup country drop down
	$("#countries").msDropdown();
	//Custom Jquery UI drop down
	$( "#list_all" ).selectmenu();
});
//a simple function to click next link
//a timer will call this function, and the rotation will begin :) 
function rotate() {
     $('#right' ).click();
}
 