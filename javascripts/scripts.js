//Makes entire screen go gray
	function grayScreen(){
		$("body").css({
			"display": "block",
			"width": $(document).width(),
			"height": $(document).height(),
			opacity: .7,
			"background-color": "black",
		});
	}
	
	function unGrayScreen(){
		$("body").css({
			"display": "block",
			"width": $(document).width(),
			"height": $(document).height(),
			opacity: 1,
			"background-color": "white",
		});
	}
	
	//Gray out the screen and put up a Loading pop-up
	function loadingScreen(){
		grayScreen();
		$.mobile.loading( 'show', {
			text: 'Loading...',
			textVisible: true,
			theme: 'b',
			html: ""
		});
	}