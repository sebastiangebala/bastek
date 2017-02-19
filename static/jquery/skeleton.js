(function($) {
    
	var section1 = $('#section1'),
		section2 = $('#section2'),
		mainText = $('#main-text'),
		faBars = $('.fa-bars'),
		sec1Wrap = $('#sec1_wrap'),
		sec2Wrap = $('#sec2_wrap'),
		btn1 = $('#btn1'),
		btn1Text = $('#btn1_text'),
		path12 = $('#path12'),
		path37 = $('#path37'),
		path58 = $('#path58'),
		path72 = $('#path72'),
		path94 = $('#path94'),
		bastek = $('#bastek'),
		intro = $('#intro'),
		tlIntro = new TimelineMax({delay: 1, onComplete: loadBase}),
		tlBase = new TimelineMax({paused: true}),
		tlSec2 = new TimelineMax({paused: true})
		

	tlIntro
		.to(path12, 2, {autoAlpha: 1})
		.to(path12, 1, {morphSVG: path37}, "+=1")
		.to(path12, 1, {morphSVG: path58}, "+=1")
		.to(path12, 1, {morphSVG: path72}, "+=1")
		.to(path12, 1, {morphSVG: path94}, "+=1")
		.to(path12, 1, {morphSVG: bastek}, "+=1")
		.to(intro, 1, {left: 100}, "-=1")


	
	// TimelineMax
	tlBase
		.from(section1, 2.5, {ease:Power0.easeNone, autoAlpha: 0, x: 150})
		.from(mainText, 1, {y: 50, autoAlpha: 0, ease:Power2.easeOut}, '-=1.0')
		.from(faBars, 1, {y: -50, autoAlpha: 0, ease:Power2.easeOut}, '-=0.5')
		.from(btn1, 1, {autoAlpha: 0, ease:Power2.easeOut}, '-=0.5')
		.from(btn1Text, 1, {y: 50, autoAlpha: 0, ease:Power2.easeOut}, '-=0.5')
		

	function loadBase(){
		tlBase.play();
	}



	tlSec2
		.to(sec1Wrap, 2.5, {y: "-100%", ease:Power4.easeOut})

	$(btn1).click(function(){
		tlSec2.play();
	});


})(jQuery);