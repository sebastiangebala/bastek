(function($) {

	var section1 = $('#section1'),
		section2 = $('#section2'),
		mainText = $('#main-text'),
		counter = $('#fa-bars, #about, #labolatory, #content1, #content2, #content3, #contact'),
		faBars = $('#fa-bars'),
		poly = $('.poly'),
		about = $('#about'),
		labolatory = $('#labolatory'),
		content1 = $('#content1'),
		content2 = $('#content2'),
		contact = $('#contact'),
		sec1Wrap = $('#sec1_wrap'),
		sec2Wrap = $('#sec2_wrap'),
		conWrap = $('#contact_wrap'),
		btn1 = $('#btn1'),
		btn1Text = $('#btn1_text'),
		path12 = $('#path12'),
		path37 = $('#path37'),
		path58 = $('#path58'),
		path72 = $('#path72'),
		path94 = $('#path94'),
		bastek = $('#bastek'),
		intro = $('#intro'),
		navWrap = $('#nav_wrap'),
		textLeft = $('#text_left'),
		ulLeft = $('#ul_left'),
		ulRight = $('#ul_right'),
		peOneLeft = $('#pe_one_left'),
		peTwoLeft = $('#pe_two_left'),
		peOneRight = $('#pe_one_right'),
		peTwoRight = $('#pe_two_right'),
		peThreeLeft = $('#pe_three_left'),
		peThreeRight = $('#pe_three_right'),
        peLab = $('#pe_lab'),
        peLab2 = $('#pe_lab2'),
		tlIntro = new TimelineMax({delay: 1, onComplete: loadBase}),
		tlBase = new TimelineMax({paused: true}),
		tlSec2 = new TimelineMax({paused: true}),
		tlNav = new TimelineMax({paused: true}),
		tlText = new TimelineMax({paused: true}),
		tlConWrap = new TimelineMax({paused: true}),
		tlConDis = new TimelineMax({paused: true}),
		tlDrawNav = new TimelineMax({paused: true})





//PATHS--------------------------------------------------------------------------------------------------------------------------------------------------------

//intro

	tlIntro
		.to(path12, 1, {autoAlpha: 1})
		.to(path12, 1, {morphSVG: path37})
		.to(path12, 1, {morphSVG: path58})
		.to(path12, 1, {morphSVG: path72})
		.to(path12, 1, {morphSVG: path94})
		.to(path12, 1, {morphSVG: bastek})
		.to(intro, 1, {left: 100}, "-=1")

//base animation (first page)

	tlBase
		.from(section1, 1, {ease:Power0.easeNone, autoAlpha: 0, x: 150})
		.from(mainText, 1, {y: 50, autoAlpha: 0, ease:Power2.easeOut}, '-=1.0')
		.from(faBars, 1, {y: -50, autoAlpha: 0, ease:Power2.easeOut}, '-=1')
		.from(btn1, 1, {autoAlpha: 0, ease:Power2.easeOut}, '-=1')
		.from(btn1Text, 1, {y: 50, autoAlpha: 0, ease:Power2.easeOut}, '-=1')

//nav handler

	tlNav
		.to(navWrap, 2, {y: "100%", ease:Power4.easeOut})

//nav draw


	tlDrawNav
		.fromTo(poly, 0.5, {drawSVG: "0%"}, {drawSVG: '100%'})

//contact handler

    tlConWrap
        .to(conWrap, 2, {y: "100%", ease:Power4.easeOut})


//expire labolatory in section 2 && display content 1,2,3

    tlConDis
        .to(sec1Wrap, 1, {y: "-100%", ease:Power4.easeOut})
		.to(sec2Wrap, 1, {y: "-100%", ease:Power4.easeOut}, '-=1')
        .to(peLab, 1, {autoAlpha: 1})
		.to(peLab2, 1, {autoAlpha: 1}, '-=1')
		.addPause()
        .to(peLab, 1, {autoAlpha: 0})
        .to(peLab2, 1, {autoAlpha: 0}, '-=1')
        .to(peOneLeft, 1, {autoAlpha: 1})
        .to(peOneRight, 1, {autoAlpha: 1}, '-=1')
        .to(ulLeft, 1, {y: '-50'})
        .to(ulRight, 1, {y: '-50'}, '-=1')
        .addPause()
        .to(peOneLeft, 1, {autoAlpha: 0})
        .to(peOneRight, 1, {autoAlpha: 0}, '-=1')
        .to(peTwoLeft, 1, {autoAlpha: 1})
        .to(peTwoRight, 1, {autoAlpha: 1}, '-=1')
        .to(ulLeft, 1, {y: '-100'})
        .to(ulRight, 1, {y: '-100'}, '-=1')
        .addPause()
        .to(peTwoLeft, 1, {autoAlpha: 0})
        .to(peTwoRight, 1, {autoAlpha: 0}, '-=1')
        .to(peThreeLeft, 1, {autoAlpha: 1})
        .to(peThreeRight, 1, {autoAlpha: 1}, '-=1')
        .to(ulLeft, 1, {y: '-150'})
        .to(ulRight, 1, {y: '-150'}, '-=1')











//FUNCTIONS--------------------------------------------------------------------------------------------------------------------------------------------------------

//load base animation!

	function loadBase(){
		tlBase.play();
	}

//show content1

    function showContent1(){
        TweenMax.to(sec1Wrap, 1, {y: "0%", ease:Power4.easeOut});
        TweenMax.to(sec2Wrap, 1, {y: "0%", ease:Power4.easeOut}, '-=1');
        TweenMax.to(conWrap, 1, {y: "0%", ease:Power4.easeOut}, '-=1');
	}

//show content2

    function showContent2(){
		TweenMax.to(sec1Wrap, 1, {y: "-100%", ease:Power4.easeOut});
        TweenMax.to(sec2Wrap, 1, {y: "-100%", ease:Power4.easeOut}, '-=1');
        TweenMax.to(conWrap, 1, {y: "0%", ease:Power4.easeOut}, '-=1');
	}

//show contact

    function showContentContact(){
		TweenMax.to(sec1Wrap, 1, {y: "-100%", ease:Power4.easeOut});
        TweenMax.to(conWrap, 1, {y: "-100%", ease:Power4.easeOut}, '-=1');
	}

// TRIGGERS---------------------------------------------------------------------------------------------------------------------------------------------------


//load second animation

	$(btn1).click(function(){
		tlConDis.restart();
	});

//nav open and close

      $(counter).click(function() {
      var clicks = $(faBars).data('clicks');
      if (clicks) {
         tlNav.reverse();
      } else {
         tlNav.play();
      }
      $(faBars).data("clicks", !clicks);
    });

//novigation

    $(about).click(function(){
        showContent1();
	});

    $(labolatory).click(function(){
        showContent2();
		tlConDis.seek(2);
	});

	$(content1).click(function(){
	    showContent2();
		tlConDis.seek(5);
	});

	$(content2).click(function(){
	    showContent2();
		tlConDis.seek(8);
	});

	$(content3).click(function(){
	    showContent2();
		tlConDis.seek(11.5);
	});

    $(contact).click(function(){
        showContentContact();
	    tlConWrap.play();
	});

    $(faBars).mouseover(function(){
        tlDrawNav.play();
	});

	$(faBars).mouseleave(function(){
        tlDrawNav.reverse();
	});


//display content1

    $(peLab).click(function(){
		tlConDis.play();
	});

//display content2

    $(peOneLeft).click(function(){
		tlConDis.play();
	});

//display content3

	$(peTwoLeft).click(function(){
		tlConDis.play();
	});



})(jQuery);



















