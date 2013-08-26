

console.log('Custom JavaScript file');



$(document).ready(function () {

	var eventType = "click touchend";
	var nullObj = {};

	function initAll() {

		var me = this;


		// ANNOTATIONS
		if($(".annotation-panel").length !=- 0){

			addAnnotationEleemnts();

			$('.open-annotation-button').bind(eventType, nullObj, function(){me.openAnnotationHandler();});
			me.openAnnotationHandler = function(e) {
				showAnnotation();
			};

			$('.close-annotation-button').bind(eventType, nullObj, function(){me.closeAnnotationHandler();});
			me.closeAnnotationHandler = function(e) {
				hideAnnotation();
			};

			// positions annotations
			resizeAnnotation();

			hideAnnotation();

			// resize
			$(window).resize(function() {
				resizeAnnotation();
			});
		}

	}


	function addAnnotationEleemnts(){
		$( "body" ).append( "<div class='open-annotation-button'>view annotations</div>" );
		$( "body" ).append( "<div class='close-annotation-button'>close</div>" );
	}

	function resizeAnnotation(){
		$(".annotation-labels > .labels").height("auto");
		$(".annotation-panel").height(($(window).height()));
		$(".annotation-labels").height(($(window).height()-100));
	}

	function hideAnnotation(){
		$(".annotation-panel").animate({
		    width: "1px"
		}, 200, function() {
			// Animation complete.
		});
		$('.open-annotation-button').css({"display":"block"});
		$('.close-annotation-button').css({"display":"none"});

		// hide dots
		$(".annotation-dot").css({"display":"none"});
	}

	function showAnnotation(){
		$(".annotation-panel").animate({
		    width: "300px"
		}, 200, function() {
			// Animation complete.
		});
		$('.open-annotation-button').css({"display":"none"});
		$('.close-annotation-button').css({"display":"block"});

		// show dots
		var dotArray = $(".annotation-dot");
		for (var i=0; i < dotArray.length; i++) {
			if(parseInt($(dotArray[i]).css("top"), 10) > 50){
				$(dotArray[i]).css({"display":"block"});
			}

		}
	}



	
	// inits it all
	initAll();





});