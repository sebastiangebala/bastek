(function($) {

	var section1 = $('#section1'),
		section2 = $('#section2'),

		counter = $('#fa-bars, #about, #labolatory, #content1, #content2, #content3, #i_made_it, #familiar_with, #contact'),
		faBars = $('#fa-bars'),
		poly = $('.poly'),
		polyColor = $('.poly_color'), 
		polyBlack = $('.poly_black'), 
		poly5 = $('#poly_5'),
		poly6 = $('#poly_6'),
		poly7 = $('#poly_7'),
		poly11 = $('#poly11'),
		poly12 = $('#poly12'),
		poly13 = $('#poly13'),
		poly14 = $('#poly14'),
        polySecond = $('#poly21, #poly22, #poly23, #poly24, #poly25, #poly26, #poly27, #poly28'),
        polyLeft = $('#poly21, #poly22, #poly23, #poly24'),
        polyRight = $('#poly25, #poly26, #poly27, #poly28'),
		about = $('#about'),

		lastUpdate = $('#last_upadate'),
		sebGeb = $('#seb_geb'),
		webDev = $('#web_dev'),


		countingTop = $('#counting_top'),
		topAllStatNum = $('.top_all_stat_num'),
		top1 = $('#top_1'),
		top2 = $('#top_2'),
		top3 = $('#top_3'),
		top4 = $('#top_4'),
		top5 = $('#top_5'),
		top6 = $('#top_6'),
		top7 = $('#top_7'),
		top8 = $('#top_8'),
		top1nav = $('#top_1_nav'),
		top2nav = $('#top_2_nav'),
		top3nav = $('#top_3_nav'),
		top4nav = $('#top_4_nav'),
		top5nav = $('#top_5_nav'),
		top6nav = $('#top_6_nav'),
		top7nav = $('#top_7_nav'),
		top8nav = $('#top_8_nav'),
		topAll = $('.top_all'),
		bottom8 = $('#bottom_8'),
		countingBottom = $('#counting_bottom'),

		drawnLine = $('.drawn_line'),
        titLab = $('#tit_lab'),
        titScroll = $('#tit_scroll'),
        titDraw = $('#tit_draw'),
        titStan = $('#tit_stan'),
        titImi = $('#tit_imi'),
        titFw = $('#tit_f_w'),
        titContact = $('#tit_contact'),
		labolatory = $('#labolatory'),
		content1 = $('#content1'),
		content2 = $('#content2'),
		imadeIt = $('#i_made_it'),
		familiarWith = $('#familiar_with'),
		contact = $('#contact'),
		sec1Wrap = $('#sec1_wrap'),
		sec2Wrap = $('#sec2_wrap'),
		conWrap = $('#contact_wrap'),
		btn1 = $('#btn1'),

		btnSolo = $('#btn_solo'),
		btnSoloAll = $('.btn_solo_all'),
		btnSoloLab = $('#btn_solo_lab'),
		btnSoloScroll = $('#btn_solo_scroll'),
		btnSoloDraw = $('#btn_solo_draw'),
		btnSoloStan = $('#btn_solo_stan'),
		btnSoloImi = $('#btn_solo_imi'),
		btnSoloFw = $('#btn_solo_fw'),
		btnSvgSolo = $('#btn_svg_solo'),
		poly31to34 = $('#poly31, #poly32, #poly33, #poly34'),

		btn2 = $('#btn2'),
		btn1SvgHold = $('#btn1_svg_hold'),
		poly11to14 = $('#poly11, #poly12, #poly13, #poly14'),
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
		textLeftPe = $('#text_left p'),
		textRight = $('#text_right'),
		textRightPe = $('#text_right p'),
		ulLeft = $('#ul_left'),
		ulRight = $('#ul_right'),
		peLab = $('#pe_lab'),
        peLab2 = $('#pe_lab2'),
		peOneLeft = $('#pe_one_left'),
		peTwoLeft = $('#pe_two_left'),
		peOneRight = $('#pe_one_right'),
		peTwoRight = $('#pe_two_right'),
		peThreeLeft = $('#pe_three_left'),
		peThreeRight = $('#pe_three_right'),
		peImiLeft = $('#pe_imi_left'),
		peImiRight = $('#pe_imi_right'),
		peFwLeft = $('#pe_fw_left'),
		peFwRight = $('#pe_fw_right'),

		drawnLineLeftTop = $('#drawn_line_left_top'),
		drawnLineBottomLeft = $('#drawn_line_bottom_left'),
		drawnLineBottomRight = $('#drawn_line_bottom_right'),

		tlIntro = new TimelineMax({delay: 1, onComplete: loadBase}),
		tlBase = new TimelineMax({paused: true, onComplete: resetBase}),
		tlNav = new TimelineMax({paused: true}),
		tlNavLeft = new TimelineMax({paused: true}),
		tlDrawNav = new TimelineMax({paused: true}),
		tlAnimButton = new TimelineMax({paused: true}),
		tlAnimButtonLeft = new TimelineMax({paused: true}),
		tlAnimButtonRight = new TimelineMax({paused: true}),
		tlRightBtnAnim = new TimelineMax({paused: true})
		




//PATHS--------------------------------------------------------------------------------------------------------------------------------------------------------

//intro

	tlIntro
		.to(path12, 1, {autoAlpha: 1})
		.to(path12, 1, {morphSVG: path37})
		.to(path12, 1, {morphSVG: path58})
		.to(path12, 1, {morphSVG: path72})
		.to(path12, 1, {morphSVG: path94})
		.to(path12, 1, {morphSVG: bastek})

//main record

	tlBase
		.from(section1, 1, {ease:Power0.easeNone, autoAlpha: 0, x: 150})
		.from(faBars, 1, {y: -50, autoAlpha: 0, ease:Power2.easeOut}, '-=1')
		.from(btn1, 1, {autoAlpha: 0, ease:Power2.easeOut}, '-=1')
		.from(btn1Text, 1, {y: 50, autoAlpha: 0, ease:Power2.easeOut}, '-=1')
		.to(top1, 1, {autoAlpha: 1}, '-=1')
		.to(bottom8, 1, {autoAlpha: 1}, '-=1')
		.to(countingBottom, 1, {autoAlpha: 1}, '-=1')
		.to(lastUpdate, 1, {autoAlpha: 1}, '-=1')
		.to(sebGeb, 1, {autoAlpha: 1}, '-=1')
		.to(webDev, 1, {autoAlpha: 1}, '-=1')
		.to(poly11to14, 1, {autoAlpha: 1}, '-=1')
		.to(countingBottom, 1, {borderTop: '1px solid rgb(3,75,210)', ease:Power0.easeNone}, '-=1')
		.to(polyColor, 1, {stroke: 'rgb(3,75,210)', ease:Power0.easeNone}, '-=1')

		.to(btnSvgSolo, 1, {autoAlpha: 0},'-=1')
		.to(poly31to34, 1, {drawSVG: "50% 50%"}, '-=1')

        .addPause()
        .to(sec1Wrap, 1, {y: "-100%", ease:Power4.easeOut})
        .to(sec2Wrap, 1, {y: "-100%", ease:Power4.easeOut}, '-=1')
        .to(conWrap, 1, {y: "0%", ease:Power4.easeOut}, '-=1')
        .to(btn1, 1, {autoAlpha: 0, ease:Power2.easeOut}, '-=1')
        .to(btn1SvgHold, 1, {autoAlpha: 0}, '-=1')
        .to(poly11to14, 1, {autoAlpha: 0}, '-=1')
        .fromTo(polySecond, 1, {drawSVG: "50% 50%"}, {drawSVG: "0% 100%"}, '-=1')
        .to(peLab, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
		.to(peLab2, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
		.to(drawnLine, 1, {autoAlpha: 1, background: 'rgb(17,126,218)'}, '-=1')
		.to(titLab, 1, {autoAlpha: 1, color: 'black', ease:Power0.easeNone}, '-=1')
		.to(top1, 1, {autoAlpha: 0}, '-=1')
		.to(top2, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
		.to(bottom8, 1, {color: 'black'}, '-=1')
		.to(countingBottom, 1, {borderTop: '1px solid rgb(17,126,218)', ease:Power0.easeNone}, '-=1')
		.to(polyColor, 1, {stroke: 'rgb(17,126,218)', ease:Power0.easeNone}, '-=1')

		.to(polyLeft, 1, {drawSVG: '0% 100%', autoAlpha: 1, ease:Power2.easeOut}, '-=1')
		.to(polyRight, 1, {drawSVG: '0% 100%', autoAlpha: 1, ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomLeft, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomRight, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(btnSvgSolo, 1, {autoAlpha: 0},'-=1')
		.to(poly31to34, 1, {drawSVG: "50% 50%"}, '-=1')

		.addPause()
        .to(peLab, 1, {autoAlpha: 0})
        .to(peLab2, 1, {autoAlpha: 0}, '-=1')
        .to(peOneLeft, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
        .to(peOneRight, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
        .to(titLab, 1, {autoAlpha: 0}, '-=1')
        .to(titLab, 1, {y: 30}, '-=1')
        .to(titScroll, 1, {autoAlpha: 1, color: 'black', ease:Power0.easeNone}, '-=1')
        .fromTo(titScroll, 1, {y: 30}, {y: 0}, '-=1')
        .to(top2, 1, {autoAlpha: 0}, '-=1')
		.to(top3, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
		.to(countingBottom, 1, {borderTop: '1px solid rgb(102,187,209)', ease:Power0.easeNone}, '-=1')
		.to(drawnLine, 1, {background: 'rgb(102,187,209)', ease:Power0.easeNone}, '-=1')
		.to(polyColor, 1, {stroke: 'rgb(102,187,209)', ease:Power0.easeNone}, '-=1')

		.to(polyLeft, 1, {drawSVG: '0% 100%', autoAlpha: 1, ease:Power2.easeOut}, '-=1')
		.to(polyRight, 1, {drawSVG: '0% 100%', autoAlpha: 1, ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomLeft, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomRight, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(btnSvgSolo, 1, {autoAlpha: 0},'-=1')
		.to(poly31to34, 1, {drawSVG: "50% 50%"}, '-=1')

        .addPause()
        .to(peOneLeft, 1, {autoAlpha: 0})
        .to(peOneRight, 1, {autoAlpha: 0}, '-=1')
        .to(peTwoLeft, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
        .to(peTwoRight, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
        .to(titScroll, 1, {autoAlpha: 0}, '-=1')
        .to(titScroll, 1, {y: 30}, '-=1')
        .to(titDraw, 1, {autoAlpha: 1, color: 'black', ease:Power0.easeNone}, '-=1')
        .fromTo(titDraw, 1, {y: 30}, {y: 0}, '-=1')
        .to(top3, 1, {autoAlpha: 0}, '-=1')
		.to(top4, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
		.to(countingBottom, 1, {borderTop: '1px solid rgb(168,234,189)', ease:Power0.easeNone}, '-=1')
		.to(drawnLine, 1, {background: 'rgb(168,234,189)', ease:Power0.easeNone}, '-=1')
		.to(polyColor, 1, {stroke: 'rgb(168,234,189)', ease:Power0.easeNone}, '-=1')

		.to(polyLeft, 1, {drawSVG: '0% 100%', autoAlpha: 1, ease:Power2.easeOut}, '-=1')
		.to(polyRight, 1, {drawSVG: '0% 100%', autoAlpha: 1, ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomLeft, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomRight, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(btnSvgSolo, 1, {autoAlpha: 0},'-=1')
		.to(poly31to34, 1, {drawSVG: "50% 50%"}, '-=1')

        .addPause()
        .to(peTwoLeft, 1, {autoAlpha: 0})
        .to(peTwoRight, 1, {autoAlpha: 0}, '-=1')
        .to(peThreeLeft, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
        .to(peThreeRight, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
        .to(titDraw, 1, {autoAlpha: 0}, '-=1')
        .to(titDraw, 1, {y: 30}, '-=1')
        .to(titStan, 1, {autoAlpha: 1, color: 'black', ease:Power0.easeNone}, '-=1')
        .fromTo(titStan, 1, {y: 30}, {y: 0}, '-=1')
        .to(top4, 1, {autoAlpha: 0}, '-=1')
		.to(top5, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
		.to(countingBottom, 1, {borderTop: '1px solid rgb(189,204,74)', ease:Power0.easeNone}, '-=1')
		.to(drawnLine, 1, {background: 'rgb(189,204,74)', ease:Power0.easeNone}, '-=1')
		.to(polyColor, 1, {stroke: 'rgb(189,204,74)', ease:Power0.easeNone}, '-=1')

		.to(polyLeft, 1, {drawSVG: '0% 100%', autoAlpha: 1, ease:Power2.easeOut}, '-=1')
		.to(polyRight, 1, {drawSVG: '0% 100%', autoAlpha: 1, ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomLeft, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomRight, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(btnSvgSolo, 1, {autoAlpha: 0},'-=1')
		.to(poly31to34, 1, {drawSVG: "50% 50%"}, '-=1')

        .addPause()
        .to(sec1Wrap, 1, {y: "-100%", ease:Power4.easeOut})
		.to(sec2Wrap, 1, {y: "-200%", ease:Power4.easeOut}, '-=1')
        .to(conWrap, 1, {y: "-100%", ease:Power4.easeOut}, '-=1')
        .to(peThreeLeft, 1, {autoAlpha: 0}, '-=1')
        .to(peThreeRight, 1, {autoAlpha: 0}, '-=1')
        .to(peImiLeft, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
        .to(peImiRight, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
        .to(titStan, 1, {autoAlpha: 0}, '-=1')
        .to(titStan, 1, {y: 30}, '-=1')
        .to(titImi, 1, {autoAlpha: 1, color: 'white', ease:Power0.easeNone}, '-=1')
        .fromTo(titImi, 1, {y: 30}, {y: 0}, '-=1')
        .to(top5, 1, {autoAlpha: 0}, '-=1')
		.to(top6, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
		.to(countingBottom, 1, {borderTop: '1px solid rgb(240,208,10)', ease:Power0.easeNone}, '-=1')
		.to(drawnLine, 1, {background: 'rgb(240,208,10)', ease:Power0.easeNone}, '-=1')
		.to(polyColor, 1, {stroke: 'rgb(240,208,10)', ease:Power0.easeNone}, '-=1')
		.to(bottom8, 1, {color: 'white', ease:Power0.easeNone}, '-=1')

		.to(polyLeft, 1, {drawSVG: '0% 100%', autoAlpha: 1, ease:Power2.easeOut}, '-=1')
		.to(polyRight, 1, {drawSVG: '0% 100%', autoAlpha: 1, ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomLeft, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomRight, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(btnSvgSolo, 1, {autoAlpha: 0},'-=1')
		.to(poly31to34, 1, {drawSVG: "50% 50%"}, '-=1')

        .addPause()
        .to(peImiLeft, 1, {autoAlpha: 0})
        .to(peImiRight, 1, {autoAlpha: 0}, '-=1')
        .to(peFwLeft, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
        .to(peFwRight, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
        .to(titImi, 1, {autoAlpha: 0}, '-=1')
        .to(titImi, 1, {y: 30}, '-=1')
        .to(titFw, 1, {autoAlpha: 1, color: 'white', ease:Power0.easeNone}, '-=1')
        .fromTo(titFw, 1, {y: 30}, {y: 0}, '-=1')
        .to(top6, 1, {autoAlpha: 0}, '-=1')
		.to(top7, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
		.to(countingBottom, 1, {borderTop: '1px solid rgb(245,184,34)', ease:Power0.easeNone}, '-=1')
		.to(drawnLine, 1, {background: 'rgb(245,184,34)', ease:Power0.easeNone}, '-=1')
		.to(polyColor, 1, {stroke: 'rgb(245,184,34)', ease:Power0.easeNone}, '-=1')	

		.to(polyLeft, 1, {drawSVG: '0% 100%', autoAlpha: 1, ease:Power2.easeOut}, '-=1')
		.to(polyRight, 1, {drawSVG: '0% 100%', autoAlpha: 1, ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomLeft, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomRight, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(btnSvgSolo, 1, {autoAlpha: 0},'-=1')
		.to(poly31to34, 1, {drawSVG: "50% 50%"}, '-=1')

        .addPause()
        .to(peFwLeft, 1, {autoAlpha: 0})
        .to(peFwRight, 1, {autoAlpha: 0}, '-=1')
        .to(titFw, 1, {autoAlpha: 0}, '-=1')
        .to(titFw, 1, {y: 30}, '-=1')
        .to(titContact, 1, {autoAlpha: 1, color: 'white', ease:Power0.easeNone}, '-=1')
        .fromTo(titContact, 1, {y: 30}, {y: 0}, '-=1')
        .to(top7, 1, {autoAlpha: 0}, '-=1')
		.to(top8, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
		.to(polySecond, 1, {autoAlpha: 0}, '-=1')
        .to(drawnLineBottomLeft, 1, {width:"50%", ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomRight, 1, {width:"50%", ease:Power2.easeOut}, '-=1')
		.to(countingBottom, 1, {borderTop: '1px solid rgb(243,117,3)', ease:Power0.easeNone}, '-=1')
		.to(drawnLine, 1, {background: 'rgb(243,117,3)', ease:Power0.easeNone}, '-=1')
		.to(polyColor, 1, {stroke: 'rgb(243,117,3)', ease:Power0.easeNone}, '-=1')

		.to(btnSvgSolo, 1, {autoAlpha: 0},'-=1')
		.to(poly31to34, 1, {drawSVG: "50% 50%"}, '-=1')

//nav handler

	tlNav
		.to(navWrap, 1, {y: "100%", ease:Power4.easeOut})

//navigation left

    tlNavLeft
        .to(topAll, 1, {autoAlpha: 1})
        .fromTo(top1nav, 1, {x: 0}, {x: 30}, '-=1')
        .fromTo(top2nav, 1, {x: 0}, {x: 60}, '-=1')
        .fromTo(top3nav, 1, {x: 0}, {x: 90}, '-=1')
        .fromTo(top4nav, 1, {x: 0}, {x: 120}, '-=1')
        .fromTo(top5nav, 1, {x: 0}, {x: 150}, '-=1')
        .fromTo(top6nav, 1, {x: 0}, {x: 180}, '-=1')
        .fromTo(top7nav, 1, {x: 0}, {x: 210}, '-=1')
        .fromTo(top8nav, 1, {x: 0}, {x: 240}, '-=1')


//nav draw


    tlDrawNav
		.to(poly, 0.5, {drawSVG: "50% 50%", ease:Power2.easeOut})
		.to(poly5, 0.5, {stroke: "rgb(240,208,10)", ease:Power2.easeOut}, '-=0.5')
		.to(poly6, 0.5, {stroke: "rgb(245,184,34)", ease:Power2.easeOut}, '-=0.5')
		.to(poly7, 0.5, {stroke: "rgb(243,117,3)", ease:Power2.easeOut}, '-=0.5')

//first button animation

    tlAnimButton
    	.to(poly11to14, 0.5, {drawSVG: "50% 50%", ease:Power2.easeOut})
        .to(btn1Text, 0.5, {color: "rgb(243,117,3)", ease:Power2.easeOut}, '-=0.5')

//next button animation

	tlAnimButtonLeft
    	.to(polyLeft, 0.5, {drawSVG: "50% 50%", ease:Power2.easeOut})
    	.to(textLeftPe, 0.5, {color: "rgb(243,117,3)", ease:Power2.easeOut}, '-=0.5')

    tlAnimButtonRight
    	.to(polyRight, 0.5, {drawSVG: "50% 50%", ease:Power2.easeOut})
    	.to(textRightPe, 0.5, {color: "rgb(243,117,3)", ease:Power2.easeOut}, '-=0.5')


//Right Button Animation

	tlRightBtnAnim
		.to(textLeft, 1, {autoAlpha: 0, ease:Power2.easeOut})
		.to(textRight, 1, {autoAlpha: 0, ease:Power2.easeOut}, '-=1')
		.to(polyLeft, 1, {autoAlpha: 0, ease:Power2.easeOut}, '-=1')
		.to(polyRight, 1, {autoAlpha: 0, ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomLeft, 1, {width:"calc(50% - 170px)", ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomRight, 1, {width:"calc(50% - 170px)", ease:Power2.easeOut}, '-=1')
		.to(btnSvgSolo, 1, {autoAlpha: 1}, '-=1')
		.fromTo(poly31to34, 1, {drawSVG: "50% 50%"}, {drawSVG: "0% 100%"}, '-=1')
		



//FUNCTIONS--------------------------------------------------------------------------------------------------------------------------------------------------------

//load base animation!

	function loadBase(){
		tlBase.play();
	}

    function resetBase(){
		tlBase.pause();
        tlBase.kill();
	}


// TRIGGERS---------------------------------------------------------------------------------------------------------------------------------------------------

//nav open and close

      $(counter).click(function() {
      var clicks = $(faBars).data('clicks');
      if (clicks) {
         tlNav.reverse();
      } else {
         tlNav.play();
         tlRightBtnAnim.reverse();
         TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
      }
      $(faBars).data("clicks", !clicks);
    });

//navigation

    $(about).click(function(){
        tlBase.seek(1);
	});

    $(labolatory).click(function(){
		tlBase.seek(2);
	});

	$(content1).click(function(){
		tlBase.seek(3);
	});

	$(content2).click(function(){
		tlBase.seek(4);
	});

	$(content3).click(function(){
		tlBase.seek(5);
	});

	$(imadeIt).click(function(){
	    tlBase.seek(6);
	});

	$(familiarWith).click(function(){
	    tlBase.seek(7);
	});

	$(contact).click(function(){
	    tlBase.seek(8);
	});

//mouseover animation

    $(faBars).mouseover(function(){
        tlDrawNav.play();
	});

	$(faBars).mouseleave(function(){
        tlDrawNav.reverse();
	});

	$(btn1).mouseover(function(){
        tlAnimButton.play();
	});

	$(btn1).mouseleave(function(){
        tlAnimButton.reverse();
	});

	//color for navigations buttons

	$(about).mouseover(function(){
        TweenMax.to(about, 0.1, {color: 'rgb(3,75,210)'});
	});

	$(about).mouseleave(function(){
        TweenMax.to(about, 0.1, {color: 'white'});
	});

	$(labolatory).mouseover(function(){
        TweenMax.to(labolatory, 0.1, {color: 'rgb(17,126,218)'});
	});

	$(labolatory).mouseleave(function(){
        TweenMax.to(labolatory, 0.1, {color: 'white'});
	});

	$(content1).mouseover(function(){
        TweenMax.to(content1, 0.1, {color: 'rgb(102,187,209)'});
	});

	$(content1).mouseleave(function(){
        TweenMax.to(content1, 0.1, {color: 'white'});
	});

	$(content2).mouseover(function(){
        TweenMax.to(content2, 0.1, {color: 'rgb(168,234,189)'});
	});

	$(content2).mouseleave(function(){
        TweenMax.to(content2, 0.1, {color: 'white'});
	});

	$(content3).mouseover(function(){
        TweenMax.to(content3, 0.1, {color: 'rgb(189,204,74)'});
	});

	$(content3).mouseleave(function(){
        TweenMax.to(content3, 0.1, {color: 'white'});
	});

	$(imadeIt).mouseover(function(){
        TweenMax.to(imadeIt, 0.1, {color: 'rgb(240,208,10)'});
	});

	$(imadeIt).mouseleave(function(){
        TweenMax.to(imadeIt, 0.1, {color: 'white'});
	});

	$(familiarWith).mouseover(function(){
        TweenMax.to(familiarWith, 0.1, {color: 'rgb(245,184,34)'});
	});

	$(familiarWith).mouseleave(function(){
        TweenMax.to(familiarWith, 0.1, {color: 'white'});
	});

	$(contact).mouseover(function(){
        TweenMax.to(contact, 0.1, {color: 'rgb(243,117,3)'});
	});

	$(contact).mouseleave(function(){
        TweenMax.to(contact, 0.1, {color: 'white'});
	});

//left navigation

	$(countingTop).mouseover(function(){
        tlNavLeft.play();
        tlRightBtnAnim.reverse();
	});

	$(countingTop).mouseleave(function(){
        tlNavLeft.reverse();
	});

	//style it!

	$(topAll).mouseover(function(){
        TweenMax.to($(this), 0.3, {y: -5});
	});

	$(topAll).mouseleave(function(){
        TweenMax.to($(this), 0.3, {y: 0});
	});


	//navigate to content

    $(topAll).click(function(){
        tlNavLeft.reverse();
	});

    $(top1nav).click(function(){
        tlBase.seek(1);
	});

    $(top2nav).click(function(){
		tlBase.seek(2);
	});

	$(top3nav).click(function(){
		tlBase.seek(3);
	});

	$(top4nav).click(function(){
		tlBase.seek(4);
	});

	$(top5nav).click(function(){
		tlBase.seek(5);
	});

	$(top6nav).click(function(){
	    tlBase.seek(6);
	});

	$(top7nav).click(function(){
	    tlBase.seek(7);
	});

	$(top8nav).click(function(){
	    tlBase.seek(8);
	});

//LEFT BUTTON

//labolatory

	$(btn1).click(function(){
		tlBase.play();
	});

//scroll me

    $(peLab).click(function(){
		tlBase.play();
	});

//drawings

    $(peOneLeft).click(function(){
		tlBase.play();
	});

//standard

	$(peTwoLeft).click(function(){
		tlBase.play();
	});

//i made it

    $(peThreeLeft).click(function(){
		tlBase.play();
	});

//familiar with

    $(peImiLeft).click(function(){
		tlBase.play();
	});

//contact

    $(peFwLeft).click(function(){
		tlBase.play();
	});

//RIGHT BUTTON

//lab

    $(peLab2).click(function(){
    	TweenMax.to(btnSoloLab, 1, {autoAlpha: 1})
		tlAnimButtonLeft.reverse();
		tlRightBtnAnim.play();
	});

//scrool me

    $(peOneRight).click(function(){
    	TweenMax.to(btnSoloScroll, 1, {autoAlpha: 1})
		tlAnimButtonLeft.reverse();
		tlRightBtnAnim.play();
	});

//drawings

	$(peTwoRight).click(function(){
		TweenMax.to(btnSoloDraw, 1, {autoAlpha: 1})
		tlAnimButtonLeft.reverse();
		tlRightBtnAnim.play();
	});

//standard

    $(peThreeRight).click(function(){
    	TweenMax.to(btnSoloStan, 1, {autoAlpha: 1})
		tlAnimButtonLeft.reverse();
		tlRightBtnAnim.play();
	});

//i made it

    $(peImiRight).click(function(){
    	TweenMax.to(btnSoloImi, 1, {autoAlpha: 1})
		tlAnimButtonLeft.reverse();
		tlRightBtnAnim.play();
	});

//familiar with

    $(peFwRight).click(function(){
    	TweenMax.to(btnSoloFw, 1, {autoAlpha: 1})
		tlAnimButtonLeft.reverse();
		tlRightBtnAnim.play();
	});


//style next button

	$(textLeft).mouseover(function(){
        tlAnimButtonLeft.play();
	});

	$(textLeft).mouseleave(function(){
        tlAnimButtonLeft.reverse();
	});

	$(textRight).mouseover(function(){
        tlAnimButtonRight.play();
	});

	$(textRight).mouseleave(function(){
        tlAnimButtonRight.reverse();
	});

})(jQuery);



















