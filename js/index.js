// Developer: Matthew Laine

// main
const main = function() {

	loop();

	// jQuery Cover Photo Animation (on click)
	$("#cover").click(function() {

		// 1. set front page (under cover) to visible
		$("#page").css("display", "inline");

		// 2. move cover page out of the way to show the visible front page
		$("#cover").animate({top: "-1000px"}, "slow", hide);

	});
}

// loop: animates "[ LOOK INSIDE }" on cover page
function loop() {
	$("#continue").animate({top: "-=30px"}, "slow");
	$("#continue").animate({top: "+=30px"}, "slow", loop);
}

// hide: cover page disappears after leaving
function hide() {
	$("#cover").css("visibility", "hidden");
}

$(document).ready(main);