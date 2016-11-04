$(function(){
	var carouselList = $("#carousel ul");
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.insertAfter(firstItem);
		carouselList.css({marginLeft:0});
	};
	setInterval(function(){
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}, 3000);
});


