(function($) {

	var section1 = $('#section1'),
		section2 = $('#section2'),
		sectionNav = $('#section_nav'),
		aboutNavImg = $('.about_nav_img'),
        labNavImg = $('.labolatory_nav_img'),
        scrollNavImg = $('.scroll_nav_img'),
        drawNavImg = $('.draw_nav_img'),
        stanNavImg = $('.stan_nav_img'),
        imiNavImg = $('.imi_nav_img'),
        fwNavImg = $('.fw_nav_img'),
        contactNavImg = $('.contact_nav_img'),

        aboutNavImgLeft = $('.about_nav_img_left'),
        labNavImgLeft = $('.labolatory_nav_img_left'),
        scrollNavImgLeft = $('.scroll_nav_img_left'),
        drawNavImgLeft = $('.draw_nav_img_left'),
        stanNavImgLeft = $('.stan_nav_img_left'),
        imiNavImgLeft = $('.imi_nav_img_left'),
        fwNavImgLeft = $('.fw_nav_img_left'),
        contactNavImgLeft = $('.contact_nav_img_left'),

		counter = $('#fa-bars, #about, #labolatory, #content1, #content2, #content3, #i_made_it, #familiar_with, #contact'),
		faBars = $('#fa-bars'),
		poly = $('.poly'),
		polyColor = $('.poly_color'),
		polyBlack = $('.poly_black'),
		poly5 = $('#poly_5'),
		poly6 = $('#poly_6'),
		poly7 = $('#poly_7'),
		poly8 = $('#poly_8'),
		poly9 = $('#poly_9'),
		poly11 = $('#poly11'),
		poly12 = $('#poly12'),
		poly13 = $('#poly13'),
		poly14 = $('#poly14'),
		about = $('#about'),

		lastUpdate = $('#last_upadate'),
		sebGeb = $('#seb_geb'),
		webDev = $('#web_dev'),
		mainText = $('#main_text'),

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
		countingLeftBlack = $('#counting_left_black'),

		drawnLine = $('.drawn_line'),
		titWrapPe = $('#title_wrap p'),
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
		polyColorSvg = $('.poly_color_svg'),

		lab1 = $('#lab_1'),
		lab2 = $('#lab_2'),
		lab3 = $('#lab_3'),
		lab4 = $('#lab_4'),
		lab5 = $('#lab_5'),
		lab6 = $('#lab_6'),
		lab7 = $('#lab_7'),
		lab8 = $('#lab_8'),
		lab9 = $('#lab_9'),
		lab10 = $('#lab_10'),
		lab11 = $('#lab_11'),
		lab12 = $('#lab_12'),
		lab13 = $('#lab_13'),
		labAll = $('.labolatory_main'),

		desktop = $('.desktop'),
		allWrapScroll = $('#desk_wrap_scroll, #tablet_wrap_scroll'),
		allWrapDraw = $('#desk_wrap_draw, #tablet_wrap_draw, #phone_wrap_draw'),
		allWrapStan = $('#desk_wrap_stan, #tablet_wrap_stan, #phone_wrap_stan'),
		desk = $('#desk'),
		tablet = $('#tablet'),
		phone = $('#phone'),
		deskWrapScroll = $('#desk_wrap_scroll'),
		tabletWrapScroll = $('#tablet_wrap_scroll'),
		phoneWrapScroll = $('#phone_wrap_scroll'),
		deskWrapDraw = $('#desk_wrap_draw'),
		tabletWrapDraw = $('#tablet_wrap_draw'),
		phoneWrapDraw = $('#phone_wrap_draw'),
		deskWrapStan = $('#desk_wrap_stan'),
		tabletWrapStan = $('#tablet_wrap_stan'),
		phoneWrapStan = $('#phone_wrap_stan'),
		redDeskClick = $('#red_desk_click'),
		redDeskClickDraw = $('#red_desk_click_draw'),
		redTabletClick = $('#red_tablet_click'),
		redPhoneClick = $('#red_phone_click'),

		chat1 = $('#chat1'),
		chat2 = $('#chat2'),
		chat3 = $('#chat3'),
		chat4 = $('#chat4'),
		chat5 = $('#chat5'),
		chat6 = $('#chat6'),
		chat7 = $('#chat7'),
		chat8 = $('#chat8'),
		chat9 = $('#chat9'),
		monster1 = $('.monster_1'),
		monstersea = $('.monstersea'),
		monsterseaTablet = $('.monstersea_tablet'),
		monsterseaPhone = $('.monstersea_phone'),
		waves1 = $('.waves_1'),
		waves2 = $('.waves_2'),
		waves3 = $('.waves_3'),
		waves4 = $('.waves_4'),
		waves5 = $('.waves_5'),
		waves6 = $('.waves_6'),
		waves7 = $('.waves_7'),
		waves8 = $('.waves_8'),
		waves9 = $('.waves_9'),

		btn2 = $('#btn2'),
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

		textRightLab = $('#text_right_lab'),
		textRightScroll = $('#text_right_scroll'),
		textRightDraw = $('#text_right_draw'),
		textRightStan = $('#text_right_stan'),
		textRightImi = $('#text_right_imi'),
		textRightFw = $('#text_right_fw'),
		textRightContact = $('#text_right_contact'),
		textRightAll = $('#text_right_lab, #text_right_scroll, #text_right_draw, #text_right_stan, #text_right_imi, #text_right_fw, #text_right_contact'),

		textRightLabClick = $('#text_right_lab_click'),
		textRightScrollClick = $('#text_right_scroll_click'),
		textRightDrawClick = $('#text_right_draw_click'),
		textRightStanClick = $('#text_right_stan_click'),
		textRightImiClick = $('#text_right_imi_click'),
		textRightFwClick = $('#text_right_fw_click'),

		textRightAllClick = $('#text_right_lab_click, #text_right_scroll_click, #text_right_draw_click, #text_right_stan_click, #text_right_imi_click, #text_right_fw_click')

		textWrapRight = $('#text_wrap_right'),
		rightText = $('.right_text'),

		iconWrapFw = $('#icon_wrap_fw'),
		iconWrapImi = $('#icon_wrap_imi'),
		iconPython = $('#icon_python'),
		iconDjango = $('#icon_django'),
		iconGs = $('#icon_gs'),
		iconJs = $('#icon_js'),
		iconCss = $('#icon_css'),
		iconHtml = $('#icon_html'),
		iconJquery = $('#icon_jquery'),
		iconToole = $('#icon_toole'),
		iconCpk = $('#icon_cpk'),

		sendBtn = $('#send_btn'),
		iconWrapContact = $('#icon_wrap_contact'),
		postBoxWrap = $('#post_box_wrap'),
		iconPoststamp = $('#icon_poststamp'),
		iconStamp = $('#icon_stamp'),
		email = $('.email'),
		message = $('.message'),

		drawnLineLeftTop = $('#drawn_line_left_top'),
		drawnLineBottomLeft = $('#drawn_line_bottom_left'),
		drawnLineBottomRight = $('#drawn_line_bottom_right'),
		drawnLineCenter = $('#drawn_line_center'),

		tlIntro = new TimelineMax({delay: 1, onComplete: loadBase}),
		tlBase = new TimelineMax({paused: true, onComplete: resetBase}),
		tlNav = new TimelineMax({paused: true}),
		tlNavLeft = new TimelineMax({paused: true}),
		tlDrawNav = new TimelineMax({paused: true}),
		tlAnimNavButton = new TimelineMax({paused: true}),
		tlAnimButton = new TimelineMax({paused: true}),
		tlAnimButtonLeft = new TimelineMax({paused: true}),
		tlAnimButtonRight = new TimelineMax({paused: true}),
		tlRightBtnAnim = new TimelineMax({paused: true}),
		tlAnimButtonAfterClick = new TimelineMax({paused: true}),
		tlSendBtn = new TimelineMax({paused: true}),
		tlMonsterAnim = new TimelineMax({paused: true, yoyo: true, repeat: -1}),
		tlShowMonster = new TimelineMax({paused: true})
		tlShowMonsterTablet = new TimelineMax({paused: true})
		tlShowMonsterPhone = new TimelineMax({paused: true})
		tlChatAnim = new TimelineMax({paused: true})
		tlShowEyes = new TimelineMax({paused: true})
		tlShowEyesTablet = new TimelineMax({paused: true})
		tlShowEyesPhone = new TimelineMax({paused: true})
		tlRedDeskAnim = new TimelineMax({paused: true})
		tlRedTabletAnim = new TimelineMax({paused: true})
		tlRedPhoneAnim = new TimelineMax({paused: true})
		tlPoststamp = new TimelineMax({paused: true})
		tlStamp = new TimelineMax({paused: true})


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
		.to(section1, 1, {ease:Power0.easeNone, autoAlpha: 0.175, x: 150})
		.to(faBars, 0.5, {autoAlpha: 1, ease:Power2.easeOut})
		.from(faBars, 2, {x: 100, ease:Elastic.easeOut.config(2,0.5)})
		.to(btn1, 0.5, {autoAlpha: 1, ease:Power2.easeOut}, '-=2')
		.to(btn1Text, 0.5, {autoAlpha: 1, ease:Power2.easeOut}, '-=2')
		.from(btn1, 2, {y: 100, ease:Elastic.easeOut.config(2,0.5)}, '-=2')
		.to(top1, 0.5, {autoAlpha: 1}, '-=2')
		.from(top1, 2, {x: -100, ease:Elastic.easeOut.config(2,0.5)}, '-=2')
		.to(lastUpdate, 0.5, {autoAlpha: 1}, '-=2')
		.fromTo(lastUpdate, 3, {rotationX: '90deg'}, {rotationX: '0deg', ease:Elastic.easeOut.config(3,0.5)})
		.to(sebGeb, 0.5, {autoAlpha: 1}, '-=3.5')
		.fromTo(sebGeb, 3, {rotationX: '90deg'}, {rotationX: '0deg', ease:Elastic.easeOut.config(3,0.5)}, '-=3')
		.to(webDev, 0.5, {autoAlpha: 1}, '-=3.5')
		.fromTo(webDev, 3, {rotationX: '90deg'}, {rotationX: '0deg', ease:Elastic.easeOut.config(3,0.5)}, '-=3')
		.to(bottom8, 0.5, {autoAlpha: 1}, '-=3.5')
        .from(bottom8, 2, {y: 100, ease:Power2.easeOut}, '-=3')
		.to(countingBottom, 1, {autoAlpha: 1}, '-=3')
		.to(mainText, 1, {autoAlpha: 1}, '-=3')
		.from(mainText, 1, {x: 100}, '-=3')
        .addPause()
 
        .to(sec1Wrap, 2, {y: "-100%", ease:Power4.easeInOut})
        .to(sec2Wrap, 2, {y: "-100%", ease:Power4.easeInOut}, '-=2')
        .to(conWrap, 2, {y: "0%", ease:Power4.easeInOut}, '-=2')
        .to(btn1, 1, {autoAlpha: 0, ease:Power2.easeOut}, '-=2')
        .to(peLab, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=2')
		.to(peLab2,1, {autoAlpha: 1, ease:Power0.easeNone}, '-=2')
        .to(drawnLine, 3, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
		.to(titLab, 1, {autoAlpha: 1, color: 'black', ease:Power0.easeNone}, '-=3')
		.to(top1, 1, {autoAlpha: 0}, '-=3')
		.to(top2, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=3')
		.to(bottom8, 1, {color: 'black'}, '-=3')
		.to(countingBottom, 1, {borderTop: '3px solid black', ease:Power0.easeNone}, '-=3')
		.to(drawnLineBottomLeft, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=3')
		.to(drawnLineBottomRight, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=3')
		.from(lab1, 1, {autoAlpha: 0}, '-=2')
		.from(lab2, 0.5, {autoAlpha: 0, y: -300}, '-=1.9')
		.from(lab3, 0.5, {autoAlpha: 0, y: 200}, '-=1.8')
		.from(lab4, 0.5, {autoAlpha: 0, x: -240}, '-=1.7')
		.from(lab5, 0.5, {autoAlpha: 0, x: -200}, '-=1.6')
		.from(lab6, 0.5, {autoAlpha: 0, y: 100}, '-=1.5')
		.from(lab7, 0.5, {autoAlpha: 0, x: -200}, '-=1.4')
		.from(lab8, 0.5, {autoAlpha: 0, x: 300}, '-=1.3')
		.from(lab9, 0.5, {autoAlpha: 0, y: -200}, '-=1.2')
		.from(lab10, 0.5, {autoAlpha: 0, y: 300}, '-=1.1')
		.from(lab11, 0.4, {autoAlpha: 0, y: -300}, '-=1.3')
		.from(lab12, 0.3, {autoAlpha: 0, y: -200}, '-=1.2')
		.from(lab13, 0.4, {autoAlpha: 0, y: -200}, '-=1.1')
		
		.addPause()

        .to(peLab, 1, {autoAlpha: 0})
        .to(peLab2, 1, {autoAlpha: 0}, '-=1')
        
        .to(titLab, 1, {autoAlpha: 0})
        .to(titLab, 1, {y: 30}, '-=1')
        .to(titScroll, 1, {autoAlpha: 1, color: 'black', ease:Power0.easeNone}, '-=1')
        .fromTo(titScroll, 1, {y: 30}, {y: 0}, '-=1')
        .to(top2, 1, {autoAlpha: 0}, '-=1')
		.to(top3, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')

		.to(drawnLineBottomLeft, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomRight, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')

		.to(desktop, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
		.to(allWrapScroll, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
		.from(desk, 1, {left: '60vh', ease:Power0.easeNone}, '-=1')
		.from(tablet, 1, {left: '10vh', ease:Power0.easeNone}, '-=1')
		.from(deskWrapScroll, 1, {left: '60vh', ease:Power0.easeNone}, '-=1')
		.from(tabletWrapScroll, 1, {left: '10vh', ease:Power0.easeNone}, '-=1')

		

		.to(labAll, 1, {autoAlpha: 0}, '-=1')

		.to(peOneLeft, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
        .to(peOneRight, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')

        


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

		.to(drawnLineBottomLeft, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomRight, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')

		.to(allWrapScroll, 1, {autoAlpha: 0, ease:Power0.easeNone}, '-=1')
		.to(allWrapDraw, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
		.to(tablet, 1, {left: '90vh', ease:Power0.easeNone}, '-=1')
		.to(phone, 1, {autoAlpha: 1, left: '105vh', ease:Power0.easeNone}, '-=1')
		.to(tabletWrapScroll, 1, {left: '90vh', ease:Power0.easeNone}, '-=1')
		.to(phoneWrapScroll, 1, {left: '105vh', ease:Power0.easeNone}, '-=1')
		.to(tabletWrapDraw, 1, {left: '90vh', ease:Power0.easeNone}, '-=1')
		.to(phoneWrapDraw, 1, {left: '105vh', ease:Power0.easeNone}, '-=1')
		.to(tabletWrapStan, 1, {left: '90vh', ease:Power0.easeNone}, '-=1')
		.to(phoneWrapStan, 1, {left: '105vh', ease:Power0.easeNone, onComplete:loadChatAnim}, '-=1')

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

		.to(drawnLineBottomLeft, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomRight, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')

		.to(allWrapDraw, 1, {autoAlpha: 0, ease:Power0.easeNone}, '-=1')
		.to(allWrapStan, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
		.to(tablet, 1, {left: '105vh', ease:Power0.easeNone}, '-=1')
		.to(phone, 1, {left: '100vh', ease:Power0.easeNone}, '-=1')
		.to(tabletWrapStan, 1, {left: '105vh', ease:Power0.easeNone}, '-=1')
		.to(phoneWrapStan, 1, {left: '100vh', ease:Power0.easeNone}, '-=1')
		.to(tabletWrapDraw, 1, {left: '105vh', ease:Power0.easeNone}, '-=1')
		.to(phoneWrapDraw, 1, {left: '100vh', ease:Power0.easeNone, onComplete:loadMonsterAnim}, '-=1')

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
		.to(countingBottom, 1, {borderTop: '3px solid white', ease:Power0.easeNone}, '-=1')
		.to(drawnLine, 1, {background: 'white', ease:Power0.easeNone}, '-=1')
		.to(bottom8, 1, {color: 'white', ease:Power0.easeNone}, '-=1')

		.to(drawnLineBottomLeft, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomRight, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(drawnLineCenter, 1, {autoAlpha: 1, ease:Power2.easeOut}, '-=1')

		.to(iconWrapImi, 1, {autoAlpha: 1}, "-=1")

		.to(titWrapPe, 1, {textShadow: "none"}, "-=1")

		.to(textWrapRight, 1, {left: "calc(50vw + 60px)"}, "-=1")
		.to(rightText, 1, {color: "white", background: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: '0pt', borderBottom: '3px solid rgb(255,215,0)'}, "-=1")

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

		.to(drawnLineBottomLeft, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomRight, 1, {width:"calc(50% - 200px * 1.5)", ease:Power2.easeOut}, '-=1')

		.to(iconWrapImi, 1, {autoAlpha: 0}, "-=1")
        .to(iconWrapFw, 1, {autoAlpha: 1}, "-=1")

        .addPause()

        .to(peFwLeft, 1, {autoAlpha: 0})
        .to(peFwRight, 1, {autoAlpha: 0}, '-=1')

        .to(titFw, 1, {autoAlpha: 0}, '-=1')
        .to(titFw, 1, {y: 30}, '-=1')
        .to(titContact, 1, {autoAlpha: 1, color: 'white', ease:Power0.easeNone}, '-=1')
        .fromTo(titContact, 1, {y: 30}, {y: 0}, '-=1')
        .to(top7, 1, {autoAlpha: 0}, '-=1')
		.to(top8, 1, {autoAlpha: 1, ease:Power0.easeNone}, '-=1')
        
		.to(textLeft, 1, {autoAlpha: 0}, '-=1')
		.to(textRight, 1, {autoAlpha: 0}, '-=1')
		.to(iconWrapFw, 1, {autoAlpha: 0}, "-=1")

		.to(iconWrapContact, 1, {autoAlpha: 1}, '-=1')
		.to(postBoxWrap, 1, {autoAlpha: 1}, '-=1')
		.to(iconPoststamp, 1, {autoAlpha: 0}, '-=1')
		.to(iconStamp, 1, {autoAlpha: 0}, '-=1')

		.to(drawnLineBottomLeft, 1, {width:"50%", ease:Power2.easeOut})
		.to(drawnLineBottomRight, 1, {width:"50%", ease:Power2.easeOut}, '-=1')


//nav handler

	tlNav
		.to(navWrap, 1, {y: "100%", ease:Power4.easeOut})

//navigation draw


    tlDrawNav
		.to(poly, 0.2, {drawSVG: "50% 50%", ease:Linear.easeNone})
		.to(poly, 0.2, {stroke: "rgb(216,19,35)", ease:Linear.easeNone})
		.to(poly, 0.2, {drawSVG: "0% 100%", ease:Linear.easeNone}, '-=0.2')
		.to(poly5, 0.2, {x: 1, repeat:1, yoyo:true, ease:Linear.easeNone}, '-=0.4')
		.to(poly5, 0.2, {stroke: "rgb(248,100,31)"}, '-=0.2')
        .to(poly6, 0.2, {x: 1, repeat:1, yoyo:true, ease:Linear.easeNone}, '-=0.3')
        .to(poly6, 0.2, {stroke: "rgb(255,215,0)"}, '-=0.2')
        .to(poly7, 0.2, {x: 1, repeat:1, yoyo:true, ease:Linear.easeNone}, '-=0.2')
		.to(poly7, 0.2, {stroke: "rgb(248,100,31)"}, '-=0.2')

//first button animation

    tlAnimButton
        .to(btn1, 0.25, {scale: 1.15, border: "3px solid rgba(216,19,35,0.9)", background: 'linear-gradient(to bottom right, rgba(216,19,35,0.9), rgba(248,100,31,0.9), rgba(255,215,0,0.9), rgba(248,100,31,0.9), rgba(216,19,35,0.9))', ease:Linear.easeNone}, '-=0.1')



//navigation left

    tlNavLeft
    	.to(countingTop, 0.1, {zIndex: 10000})
        .to(topAll, 1, {autoAlpha: 1})
        .fromTo(top1nav, 1, {x: 0}, {x: 30}, '-=1')
        .fromTo(top2nav, 1, {x: 0}, {x: 70}, '-=1')
        .fromTo(top3nav, 1, {x: 0}, {x: 110}, '-=1')
        .fromTo(top4nav, 1, {x: 0}, {x: 150}, '-=1')
        .fromTo(top5nav, 1, {x: 0}, {x: 190}, '-=1')
        .fromTo(top6nav, 1, {x: 0}, {x: 230}, '-=1')
        .fromTo(top7nav, 1, {x: 0}, {x: 270}, '-=1')
        .fromTo(top8nav, 1, {x: 0}, {x: 310}, '-=1')
        .to(countingLeftBlack, 1, {right: '0%', ease:Power4.easeOut}, '-=1')


//fa_Bars click event

	tlAnimNavButton
		.to(poly5, 0.5, {morphSVG: poly8, ease:Linear.easeNone})
		.to(poly7, 0.5, {morphSVG: poly9, ease:Linear.easeNone}, '-=0.5')
		.to(poly6, 0.5, {autoAlpha: 0, ease:Linear.easeNone}, '-=0.5')


//next button animation

	tlAnimButtonLeft
    	.to(textLeft, 0.25, {scale: 1.15, border: "3px solid rgba(216,19,35,0.9)", background: 'linear-gradient(to bottom right, rgba(216,19,35,0.9), rgba(248,100,31,0.9), rgba(255,215,0,0.9), rgba(248,100,31,0.9), rgba(216,19,35,0.9))', ease:Linear.easeNone}, '-=0.1')


    tlAnimButtonRight
    	.to(textRight, 0.25, {scale: 1.15, border: "3px solid rgba(216,19,35,0.9)", background: 'linear-gradient(to bottom right, rgba(216,19,35,0.9), rgba(248,100,31,0.9), rgba(255,215,0,0.9), rgba(248,100,31,0.9), rgba(216,19,35,0.9))', ease:Linear.easeNone}, '-=0.1')




//Right Button Animation

	tlRightBtnAnim
		.to(textLeft, 2, {autoAlpha: 0, y: 100, autoAlpha: 0, ease:Back.easeInOut.config(4)})
        .to(textRight, 2, {autoAlpha: 0, y: 100, autoAlpha: 0, ease:Back.easeInOut.config(4)}, '-=2')
		.to(drawnLineBottomLeft, 1, {width:"calc(50% - 170px)", ease:Power2.easeOut}, '-=1')
		.to(drawnLineBottomRight, 1, {width:"calc(50% - 170px)", ease:Power2.easeOut}, '-=1')
		.to(btnSolo, 1, {autoAlpha: 1}, '-=1')

//After Right Click Animation Button

	tlAnimButtonAfterClick
    	.to(btnSoloAll, 0.25, {scale: 1.15, border: "3px solid rgba(216,19,35,0.9)", background: 'linear-gradient(to bottom right, rgba(139,69,190.9), rgba(248,100,31,0.9), rgba(255,215,0,0.9), rgba(248,100,31,0.9), rgba(216,19,35,0.9))', ease:Linear.easeNone}, '-=0.1')


//Red Btn Anim

	tlRedDeskAnim
		.to(redDeskClick, 0.1, {border: "1px solid red", ease:Linear.easeNone})

	tlRedTabletAnim
		.to(redTabletClick, 0.1, {border: "1px solid red", ease:Linear.easeNone})

	tlRedPhoneAnim
		.to(redPhoneClick, 0.1, {border: "1px solid red", ease:Linear.easeNone})

//Send button animation

    tlSendBtn
    	.to(sendBtn, 0.25, {scale: 1.15, border: "3px solid rgba(216,19,35,0.9)", background: 'linear-gradient(to bottom right, rgba(216,19,35,0.9), rgba(248,100,31,0.9), rgba(255,215,0,0.9), rgba(248,100,31,0.9), rgba(216,19,35,0.9))', ease:Linear.easeNone}, '-=0.1')


//drawings anim

	tlChatAnim
		.to(chat1, 0.2, {autoAlpha: 1})
		.to(chat2, 0.2, {autoAlpha: 1})
		.to(chat3, 0.2, {autoAlpha: 1})
		.to(chat4, 0.2, {autoAlpha: 1})
		.to(chat5, 0.2, {autoAlpha: 1})
		.to(chat6, 0.2, {autoAlpha: 1})
		.to(chat7, 0.2, {autoAlpha: 1})
		.to(chat8, 0.2, {autoAlpha: 1})
		.to(chat9, 0.2, {autoAlpha: 1})

	tlShowEyes
		.to(chat3, 0.2, {autoAlpha: 0})
		.to(deskWrapDraw, 0.2, {background: "black"}, "-=0.2")

	tlShowEyesTablet
		.to(chat6, 0.2, {autoAlpha: 0})
		.to(tabletWrapDraw, 0.2, {background: "black"}, "-=0.2")

	tlShowEyesPhone
		.to(chat9, 0.2, {autoAlpha: 0})
		.to(phoneWrapDraw, 0.2, {background: "black"}, "-=0.2")


//standard animation

	tlMonsterAnim
		.to(monster1, 1.5, {y: 22, ease:Power0.easeNone})
		.to(waves1, 1.5, {y: 25, ease:Power0.easeNone}, '-=1.5')
		.to(waves2, 1.5, {y: 18, ease:Power0.easeNone}, '-=1.5')
		.to(waves3, 1.5, {y: 11, ease:Power0.easeNone}, '-=1.5')
		.to(waves4, 1.5, {y: 10, ease:Power0.easeNone}, '-=1.5')
		.to(waves5, 1.5, {y: 8, ease:Power0.easeNone}, '-=1.5')
		.to(waves6, 1.5, {y: 6, ease:Power0.easeNone}, '-=1.5')
		.to(waves7, 1.5, {y: 4, ease:Power0.easeNone}, '-=1.5')
		.to(waves8, 1.5, {y: 3, ease:Power0.easeNone}, '-=1.5')
		.to(waves9, 1.5, {y: 1, ease:Power0.easeNone}, '-=1.5')

	tlShowMonster
		.fromTo(monstersea, 1, {x: 500, y: 500}, {x: 70, y: 70})
		.to(monstersea, 1, {rotation: '-25'},'-=1')

	tlShowMonsterTablet
		.fromTo(monsterseaTablet, 1, {x: 300, y: 300}, {x: 20, y: 20})
		.to(monsterseaTablet, 1, {rotation: '-25'},'-=1')

	tlShowMonsterPhone
		.fromTo(monsterseaPhone, 1, {x: 300, y: 300}, {x: 20, y: 20})
		.to(monsterseaPhone, 1, {rotation: '-25'},'-=1')

//Contact Animtions

	tlPoststamp
		.to(iconPoststamp, 1, {autoAlpha: 1})
		.from(iconPoststamp, 2, {scale: 15, rotation: '180deg', x: -1000, y: -500}, '-=1')

	tlStamp
		.to(iconStamp, 0.5, {autoAlpha: 1})
		.from(iconStamp, 1, {scale: 20}, '-=0.5')




//FUNCTIONS--------------------------------------------------------------------------------------------------------------------------------------------------------

//load base animation!

	function loadBase(){
		tlBase.play();
	}

	function loadMonsterAnim(){
		tlMonsterAnim.play();
	}

	function loadChatAnim(){
		tlChatAnim.play();
	}

    function resetBase(){
		tlBase.pause();
        tlBase.kill();
	}


// TRIGGERS---------------------------------------------------------------------------------------------------------------------------------------------------

//navigation open and close

      $(counter).click(function() {
      var clicks = $(faBars).data('clicks');
      if (clicks) {
         tlNav.reverse();
         tlAnimNavButton.reverse();
      } else {
         tlNav.play();
         tlAnimNavButton.play();
      }
      $(faBars).data("clicks", !clicks);
    	});

//navigation

    $(about).click(function(){
        tlRightBtnAnim.reverse();
        tlAnimNavButton.reverse();
        TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
        TweenMax.to(btnSolo, 1, {autoAlpha: 0});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(aboutNavImg, 0.5, {autoAlpha: 0, scale: 1});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(textRightAll, 1, {autoAlpha: 0});
        tlBase.seek(6.5);
	});

    $(labolatory).click(function(){
    	tlRightBtnAnim.reverse();
    	tlAnimNavButton.reverse();
        TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
        TweenMax.to(btnSolo, 1, {autoAlpha: 0});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(labNavImg, 0.5, {autoAlpha: 0, scale: 1});
        TweenMax.to(textRightAll, 1, {autoAlpha: 0});
        TweenMax.fromTo(textRightLab, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0});
        TweenMax.fromTo(textLeft, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.fromTo(textRight, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
		tlBase.seek(10.5);
	});

	$(content1).click(function(){
		tlRightBtnAnim.reverse();
		tlAnimNavButton.reverse();
        TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
        TweenMax.to(btnSolo, 1, {autoAlpha: 0});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(scrollNavImg, 0.5, {autoAlpha: 0, scale: 1});
        TweenMax.to(textRightAll, 1, {autoAlpha: 0});
        TweenMax.fromTo(textRightScroll, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0});
        TweenMax.fromTo(textLeft, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.fromTo(textRight, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
		tlBase.seek(12.5);
	});

	$(content2).click(function(){
		tlRightBtnAnim.reverse();
		tlAnimNavButton.reverse();
        TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
        TweenMax.to(btnSolo, 1, {autoAlpha: 0});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(drawNavImg, 0.5, {autoAlpha: 0, scale: 1});
        TweenMax.to(textRightAll, 1, {autoAlpha: 0});
        TweenMax.fromTo(textRightDraw, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0});
        TweenMax.fromTo(textLeft, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.fromTo(textRight, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
		tlChatAnim.play();
		tlBase.seek(13.5);
	});

	$(content3).click(function(){
		tlRightBtnAnim.reverse();
		tlAnimNavButton.reverse();
        TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
        TweenMax.to(btnSolo, 1, {autoAlpha: 0});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(stanNavImg, 0.5, {autoAlpha: 0, scale: 1});
        TweenMax.to(textRightAll, 1, {autoAlpha: 0});
        TweenMax.fromTo(textRightStan, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0});
        TweenMax.fromTo(textLeft, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.fromTo(textRight, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
		tlMonsterAnim.play();
		tlBase.seek(14.5);
	});

	$(imadeIt).click(function(){
		tlRightBtnAnim.reverse();
		tlAnimNavButton.reverse();
        TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
        TweenMax.to(btnSolo, 1, {autoAlpha: 0});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(imiNavImg, 0.5, {autoAlpha: 0, scale: 1});
        TweenMax.to(textRightAll, 1, {autoAlpha: 0});
        TweenMax.fromTo(textRightImi, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0});
        TweenMax.fromTo(textLeft, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.fromTo(textRight, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
	    tlBase.seek(15.5);
	});

	$(familiarWith).click(function(){
		tlRightBtnAnim.reverse();
		tlAnimNavButton.reverse();
        TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
        TweenMax.to(btnSolo, 1, {autoAlpha: 0});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(fwNavImg, 0.5, {autoAlpha: 0, scale: 1});
        TweenMax.to(textRightAll, 1, {autoAlpha: 0});
        TweenMax.fromTo(textRightFw, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0});
        TweenMax.fromTo(textLeft, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.fromTo(textRight, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
	    tlBase.seek(16.5);
	});

	$(contact).click(function(){
		tlAnimNavButton.reverse();
		TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
		TweenMax.to(btnSolo, 1, {autoAlpha: 0});
		TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
		TweenMax.to(contactNavImg, 0.5, {autoAlpha: 0, scale: 1});
		TweenMax.to(textRightAll, 1, {autoAlpha: 0});
		TweenMax.fromTo(textRightContact, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0});
	    tlBase.seek(18);
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

	//color and animations for navigation's buttons

	$(about).mouseover(function(){
        TweenMax.to(about, 0.1, {color: 'rgb(216,19,35)'});
        TweenMax.to(aboutNavImg, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(about).mouseleave(function(){
        TweenMax.to(about, 0.1, {color: 'white'});
        TweenMax.to(aboutNavImg, 0.5, {autoAlpha: 0, scale: 1});
	});

	$(labolatory).mouseover(function(){
        TweenMax.to(labolatory, 0.1, {color: 'rgb(248,100,31)'});
        TweenMax.to(labNavImg, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(labolatory).mouseleave(function(){
        TweenMax.to(labolatory, 0.1, {color: 'white'});
        TweenMax.to(labNavImg, 0.5, {autoAlpha: 0, scale: 1});
	});

	$(content1).mouseover(function(){
        TweenMax.to(content1, 0.1, {color: 'rgb(248,100,31)'});
        TweenMax.to(scrollNavImg, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(content1).mouseleave(function(){
        TweenMax.to(content1, 0.1, {color: 'white'});
        TweenMax.to(scrollNavImg, 0.5, {autoAlpha: 0, scale: 1});
	});

	$(content2).mouseover(function(){
        TweenMax.to(content2, 0.1, {color: 'rgb(255,215,0)'});
        TweenMax.to(drawNavImg, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(content2).mouseleave(function(){
        TweenMax.to(content2, 0.1, {color: 'white'});
        TweenMax.to(drawNavImg, 0.5, {autoAlpha: 0, scale: 1});
	});

	$(content3).mouseover(function(){
        TweenMax.to(content3, 0.1, {color: 'rgb(255,215,0)'});
        TweenMax.to(stanNavImg, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(content3).mouseleave(function(){
        TweenMax.to(content3, 0.1, {color: 'white'});
        TweenMax.to(stanNavImg, 0.5, {autoAlpha: 0, scale: 1});
	});

	$(imadeIt).mouseover(function(){
        TweenMax.to(imadeIt, 0.1, {color: 'rgb(248,100,31)'});
        TweenMax.to(imiNavImg, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(imadeIt).mouseleave(function(){
        TweenMax.to(imadeIt, 0.1, {color: 'white'});
        TweenMax.to(imiNavImg, 0.5, {autoAlpha: 0, scale: 1});
	});

	$(familiarWith).mouseover(function(){
        TweenMax.to(familiarWith, 0.1, {color: 'rgb(248,100,31)'});
        TweenMax.to(fwNavImg, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(familiarWith).mouseleave(function(){
        TweenMax.to(familiarWith, 0.1, {color: 'white'});
        TweenMax.to(fwNavImg, 0.5, {autoAlpha: 0, scale: 1});
	});

	$(contact).mouseover(function(){
        TweenMax.to(contact, 0.1, {color: 'rgb(216,19,35)'});
        TweenMax.to(contactNavImg, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(contact).mouseleave(function(){
        TweenMax.to(contact, 0.1, {color: 'white'});
        TweenMax.to(contactNavImg, 0.5, {autoAlpha: 0, scale: 1});
	});

//LEFT NAVIGATION

	$(countingTop).click(function() {
    var clicks = $(countingTop).data('clicks');
    if (clicks) {
        tlNavLeft.reverse();
    } else {
        tlNavLeft.play();
    }
    $(countingTop).data("clicks", !clicks);
    });


	//style it!

	$(top1nav).mouseover(function(){
        TweenMax.to(top1nav, 0.2, {scale: 1.5, color: 'rgb(216,19,35)', border: '3px solid rgb(216,19,35)'});
        TweenMax.to(aboutNavImgLeft, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(top1nav).mouseleave(function(){
        TweenMax.to(top1nav, 0.2, {scale: 1.0, color: 'rgb(3,75,210)', border: '3px solid rgb(3,75,210)'});
        TweenMax.to(aboutNavImgLeft, 0.5, {autoAlpha: 0, scale: 1.0});
	});

	$(top2nav).mouseover(function(){
        TweenMax.to(top2nav, 0.2, {scale: 1.5, color: 'rgb(248,100,31)', border: '3px solid rgb(248,100,31)'});
        TweenMax.to(labNavImgLeft, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(top2nav).mouseleave(function(){
        TweenMax.to(top2nav, 0.2, {scale: 1.0, color: 'rgb(17,126,218)', border: '3px solid rgb(17,126,218)'});
        TweenMax.to(labNavImgLeft, 0.5, {autoAlpha: 0, scale: 1.0});
	});

	$(top3nav).mouseover(function(){
        TweenMax.to(top3nav, 0.2, {scale: 1.5, color: 'rgb(248,100,31)', border: '3px solid rgb(248,100,31)'});
        TweenMax.to(scrollNavImgLeft, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(top3nav).mouseleave(function(){
        TweenMax.to(top3nav, 0.2, {scale: 1.0, color: 'rgb(17,126,218)', border: '3px solid rgb(17,126,218)'});
        TweenMax.to(scrollNavImgLeft, 0.5, {autoAlpha: 0, scale: 1.0});
	});

	$(top4nav).mouseover(function(){
        TweenMax.to(top4nav, 0.2, {scale: 1.5, color: 'rgb(255,215,0)', border: '3px solid rgb(255,215,0)'});
        TweenMax.to(drawNavImgLeft, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(top4nav).mouseleave(function(){
        TweenMax.to(top4nav, 0.2, {scale: 1.0, color: 'rgb(102,187,209)', border: '3px solid rgb(102,187,209)'});
        TweenMax.to(drawNavImgLeft, 0.5, {autoAlpha: 0, scale: 1.0});
	});

	$(top5nav).mouseover(function(){
        TweenMax.to(top5nav, 0.2, {scale: 1.5, color: 'rgb(255,215,0)', border: '3px solid rgb(255,215,0)'});
        TweenMax.to(stanNavImgLeft, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(top5nav).mouseleave(function(){
        TweenMax.to(top5nav, 0.2, {scale: 1.0, color: 'rgb(102,187,209)', border: '3px solid rgb(102,187,209)'});
        TweenMax.to(stanNavImgLeft, 0.5, {autoAlpha: 0, scale: 1.0});
	});

	$(top6nav).mouseover(function(){
        TweenMax.to(top6nav, 0.2, {scale: 1.5, color: 'rgb(248,100,31)', border: '3px solid rgb(248,100,31)'});
        TweenMax.to(imiNavImgLeft, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(top6nav).mouseleave(function(){
        TweenMax.to(top6nav, 0.2, {scale: 1.0, color: 'rgb(17,126,218)', border: '3px solid rgb(17,126,218)'});
        TweenMax.to(imiNavImgLeft, 0.5, {autoAlpha: 0, scale: 1.0});
	});

	$(top7nav).mouseover(function(){
        TweenMax.to(top7nav, 0.2, {scale: 1.5, color: 'rgb(248,100,31)', border: '3px solid rgb(248,100,31)'});
        TweenMax.to(fwNavImgLeft, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(top7nav).mouseleave(function(){
        TweenMax.to(top7nav, 0.2, {scale: 1.0, color: 'rgb(17,126,218)', border: '3px solid rgb(17,126,218)'});
        TweenMax.to(fwNavImgLeft, 0.5, {autoAlpha: 0, scale: 1.0});
	});

	$(top8nav).mouseover(function(){
        TweenMax.to(top8nav, 0.2, {scale: 1.5, color: 'rgb(216,19,35)', border: '3px solid rgb(216,19,35)'});
        TweenMax.to(contactNavImgLeft, 0.5, {autoAlpha: 0.3, scale: 1.2});
	});

	$(top8nav).mouseleave(function(){
        TweenMax.to(top8nav, 0.2, {scale: 1.0, color: 'rgb(3,75,210)', border: '3px solid rgb(3,75,210)'});
        TweenMax.to(contactNavImgLeft, 0.5, {autoAlpha: 0, scale: 1.0});
	});


	//navigate to content

    $(topAll).click(function(){
        tlNavLeft.reverse();
	});

    $(top1nav).click(function(){
    	tlRightBtnAnim.reverse();
        tlAnimNavButton.reverse();
        TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
        TweenMax.to(btnSolo, 1, {autoAlpha: 0});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(aboutNavImgLeft, 0.5, {autoAlpha: 0, scale: 1});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(textRightAll, 1, {autoAlpha: 0});
        tlBase.seek(6.5);
	});

    $(top2nav).click(function(){
    	tlRightBtnAnim.reverse();
    	tlAnimNavButton.reverse();
        TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
        TweenMax.to(btnSolo, 1, {autoAlpha: 0});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(labNavImgLeft, 0.5, {autoAlpha: 0, scale: 1});
        TweenMax.to(textRightAll, 1, {autoAlpha: 0});
        TweenMax.fromTo(textRightLab, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0});
        TweenMax.fromTo(textLeft, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.fromTo(textRight, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
		tlBase.seek(10.5);
	});

	$(top3nav).click(function(){
		tlRightBtnAnim.reverse();
    	tlAnimNavButton.reverse();
        TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
        TweenMax.to(btnSolo, 1, {autoAlpha: 0});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(labNavImgLeft, 0.5, {autoAlpha: 0, scale: 1});
        TweenMax.to(textRightAll, 1, {autoAlpha: 0});
        TweenMax.fromTo(textRightScroll, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0});
        TweenMax.fromTo(textLeft, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.fromTo(textRight, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
		tlBase.seek(12.5);
	});

	$(top4nav).click(function(){
		tlRightBtnAnim.reverse();
    	tlAnimNavButton.reverse();
        TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
        TweenMax.to(btnSolo, 1, {autoAlpha: 0});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(labNavImgLeft, 0.5, {autoAlpha: 0, scale: 1});
        TweenMax.to(textRightAll, 1, {autoAlpha: 0});
        TweenMax.fromTo(textRightDraw, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0});
        TweenMax.fromTo(textLeft, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.fromTo(textRight, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
		tlChatAnim.play();
		tlBase.seek(13.5);
	});

	$(top5nav).click(function(){
		tlRightBtnAnim.reverse();
    	tlAnimNavButton.reverse();
        TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
        TweenMax.to(btnSolo, 1, {autoAlpha: 0});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(labNavImgLeft, 0.5, {autoAlpha: 0, scale: 1});
        TweenMax.to(textRightAll, 1, {autoAlpha: 0});
        TweenMax.fromTo(textRightStan, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0});
        TweenMax.fromTo(textLeft, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.fromTo(textRight, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
		tlMonsterAnim.play();
		tlBase.seek(14.5);
	});

	$(top6nav).click(function(){
		tlRightBtnAnim.reverse();
    	tlAnimNavButton.reverse();
        TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
        TweenMax.to(btnSolo, 1, {autoAlpha: 0});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(labNavImgLeft, 0.5, {autoAlpha: 0, scale: 1});
        TweenMax.to(textRightAll, 1, {autoAlpha: 0});
        TweenMax.fromTo(textRightImi, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0});
        TweenMax.fromTo(textLeft, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.fromTo(textRight, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
	    tlBase.seek(15.5);
	});

	$(top7nav).click(function(){
		tlRightBtnAnim.reverse();
    	tlAnimNavButton.reverse();
        TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
        TweenMax.to(btnSolo, 1, {autoAlpha: 0});
        TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
        TweenMax.to(labNavImgLeft, 0.5, {autoAlpha: 0, scale: 1});
        TweenMax.to(textRightAll, 1, {autoAlpha: 0});
        TweenMax.fromTo(textRightFw, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0});
        TweenMax.fromTo(textLeft, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.fromTo(textRight, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5)});
	    tlBase.seek(16.5);
	});

	$(top8nav).click(function(){
        TweenMax.to(btnSoloAll, 1, {autoAlpha: 0});
		TweenMax.to(btnSolo, 1, {autoAlpha: 0});
		TweenMax.to(textRightAllClick, 1, {autoAlpha: 0});
		TweenMax.to(contactNavImgLeft, 0.5, {autoAlpha: 0, scale: 1});
		TweenMax.to(textRightAll, 1, {autoAlpha: 0});
		TweenMax.fromTo(textRightContact, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0});
	    tlBase.seek(18);
	});

//LEFT BUTTON

//labolatory

	$(btn1).click(function(){
		tlBase.play();
		TweenMax.fromTo(textRightLab, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
		TweenMax.fromTo(textLeft, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 2});
        TweenMax.fromTo(textRight, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 2});
	});

//scroll me

    $(peLab).click(function(){
    	TweenMax.fromTo(textLeft, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(textRight, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.to(textRightLab, 1, {autoAlpha: 0, x: 100});
        TweenMax.fromTo(textRightScroll, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
		TweenMax.fromTo(textLeft, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 2});
        TweenMax.fromTo(textRight, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 2});
		tlBase.play();
	});

//drawings

    $(peOneLeft).click(function(){
    	TweenMax.fromTo(textLeft, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(textRight, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.to(textRightScroll, 1, {autoAlpha: 0, x: 100});
        TweenMax.fromTo(textRightDraw, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
		TweenMax.fromTo(textLeft, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 2});
        TweenMax.fromTo(textRight, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 2});
		tlBase.play();
	});

//standard

	$(peTwoLeft).click(function(){
		TweenMax.fromTo(textLeft, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(textRight, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.to(textRightDraw, 1, {autoAlpha: 0, x: 100});
        TweenMax.fromTo(textRightStan, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
		TweenMax.fromTo(textLeft, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 2});
        TweenMax.fromTo(textRight, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 2});
		tlBase.play();
	});

//i made it

    $(peThreeLeft).click(function(){
    	TweenMax.fromTo(textLeft, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(textRight, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.to(textRightStan, 1, {autoAlpha: 0, x: 100});
        TweenMax.fromTo(textRightImi, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
		TweenMax.fromTo(textLeft, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 2});
        TweenMax.fromTo(textRight, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 2});
		tlBase.play();
	});

//familiar with

    $(peImiLeft).click(function(){
    	TweenMax.fromTo(textLeft, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(textRight, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.to(textRightImi, 1, {autoAlpha: 0, x: 100});
        TweenMax.fromTo(textRightFw, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
		TweenMax.fromTo(textLeft, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 2});
        TweenMax.fromTo(textRight, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 2});
		tlBase.play();
	});

//contact

    $(peFwLeft).click(function(){
    	TweenMax.fromTo(textLeft, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(textRight, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.to(textRightFw, 1, {autoAlpha: 0, x: 100});
        TweenMax.fromTo(textRightContact, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
		tlBase.play();
	});

//RIGHT BUTTON

//lab

    $(peLab2).click(function(){
    	TweenMax.fromTo(textLeft, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(textRight, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(btnSolo, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
        TweenMax.to(textRightLab, 1, {autoAlpha: 0, x: 100});
		TweenMax.fromTo(textRightLabClick, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
    	TweenMax.to(btnSoloLab, 1, {autoAlpha: 1});
		tlAnimButtonLeft.reverse();
		tlRightBtnAnim.play();
	});

//scrool me

    $(peOneRight).click(function(){
    	TweenMax.fromTo(textLeft, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(textRight, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(btnSolo, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
        TweenMax.to(textRightScroll, 1, {autoAlpha: 0, x: 100});
        TweenMax.fromTo(textRightScrollClick, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
    	TweenMax.to(btnSoloScroll, 1, {autoAlpha: 1});
		tlAnimButtonLeft.reverse();
		tlRightBtnAnim.play();
	});

//drawings

	$(peTwoRight).click(function(){
		TweenMax.fromTo(textLeft, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(textRight, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(btnSolo, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
        TweenMax.to(textRightDraw, 1, {autoAlpha: 0, x: 100});
		TweenMax.fromTo(textRightDrawClick, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
		TweenMax.to(btnSoloDraw, 1, {autoAlpha: 1});
		tlAnimButtonLeft.reverse();
		tlRightBtnAnim.play();
	});

//standard

    $(peThreeRight).click(function(){
    	TweenMax.fromTo(textLeft, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(textRight, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(btnSolo, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
        TweenMax.to(textRightStan, 1, {autoAlpha: 0, x: 100});
		TweenMax.fromTo(textRightStanClick, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
    	TweenMax.to(btnSoloStan, 1, {autoAlpha: 1});
		tlAnimButtonLeft.reverse();
		tlRightBtnAnim.play();
	});

//i made it

    $(peImiRight).click(function(){
    	TweenMax.fromTo(textLeft, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(textRight, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(btnSolo, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
        TweenMax.to(textRightImi, 1, {autoAlpha: 0, x: 100});
		TweenMax.fromTo(textRightImiClick, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
    	TweenMax.to(btnSoloImi, 1, {autoAlpha: 1});
		tlAnimButtonLeft.reverse();
		tlRightBtnAnim.play();
	});

//familiar with

    $(peFwRight).click(function(){
    	TweenMax.fromTo(textLeft, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.fromTo(textRight, 2, {y: 0, autoAlpha: 1}, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
       	TweenMax.fromTo(btnSolo, 2, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
        TweenMax.to(textRightFw, 1, {autoAlpha: 0, x: 100});
		TweenMax.fromTo(textRightFwClick, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
    	TweenMax.to(btnSoloFw, 1, {autoAlpha: 1});
		tlAnimButtonLeft.reverse();
		tlRightBtnAnim.play();
	});


//style left and right button

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



//CENTER BUTTON AFTER RIGHT CLICK EVENT

//labolatory to scroll me

	$(btnSoloLab).click(function(){
		TweenMax.from(textLeft, 2, {y: 100, autoAlpha: 0, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.from(textRight, 2, {y: 100, autoAlpha: 0, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.to(textRightLabClick, 1, {autoAlpha: 0, x: 100});
        TweenMax.fromTo(textRightScroll, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
		TweenMax.to(btnSoloAll, 1, {autoAlpha: 0, delay: 1});
        TweenMax.to(btnSolo, 2, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.to(textLeft, 2, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
        TweenMax.to(textRight, 2, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
		tlRightBtnAnim.reverse();
		tlBase.play();
	});

//scroll me to drawings

    $(btnSoloScroll).click(function(){
    	TweenMax.from(textLeft, 2, {y: 100, autoAlpha: 0, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.from(textRight, 2, {y: 100, autoAlpha: 0, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.to(textRightScrollClick, 1, {autoAlpha: 0, x: 100});
        TweenMax.fromTo(textRightDraw, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
		TweenMax.to(btnSoloAll, 1, {autoAlpha: 0, delay: 1});
        TweenMax.to(btnSolo, 2, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.to(textLeft, 2, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
        TweenMax.to(textRight, 2, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
		tlRightBtnAnim.reverse();
		tlBase.play();
	});

//drawings to standard

    $(btnSoloDraw).click(function(){
    	TweenMax.from(textLeft, 2, {y: 100, autoAlpha: 0, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.from(textRight, 2, {y: 100, autoAlpha: 0, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.to(textRightDrawClick, 1, {autoAlpha: 0, x: 100});
        TweenMax.fromTo(textRightStan, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
		TweenMax.to(btnSoloAll, 1, {autoAlpha: 0, delay: 1});
        TweenMax.to(btnSolo, 2, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
        TweenMax.to(textLeft, 2, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
        TweenMax.to(textRight, 2, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
		tlRightBtnAnim.reverse();
		tlBase.play();
	});

//standard to I made it

	$(btnSoloStan).click(function(){
		TweenMax.from(textLeft, 2, {y: 100, autoAlpha: 0, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.from(textRight, 2, {y: 100, autoAlpha: 0, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.to(textRightStanClick, 1, {autoAlpha: 0, x: 100});
        TweenMax.fromTo(textRightImi, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
		TweenMax.to(btnSoloAll, 1, {autoAlpha: 0, delay: 1});
		TweenMax.to(btnSolo, 2, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
		TweenMax.to(textLeft, 2, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
        TweenMax.to(textRight, 2, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
		tlRightBtnAnim.reverse();
		tlBase.play();
	});

//i made it to familiar with

    $(btnSoloImi).click(function(){
    	TweenMax.from(textLeft, 2, {y: 100, autoAlpha: 0, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.from(textRight, 2, {y: 100, autoAlpha: 0, ease:Elastic.easeOut.config(2,0.5)});
        TweenMax.to(textRightImiClick, 1, {autoAlpha: 0, x: 100});
        TweenMax.fromTo(textRightFw, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
		TweenMax.to(btnSoloAll, 1, {autoAlpha: 0, delay: 1});
		TweenMax.to(btnSolo, 2, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
		TweenMax.to(textLeft, 2, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
        TweenMax.to(textRight, 2, {y: 0, autoAlpha: 1, ease:Elastic.easeOut.config(2,0.5), delay: 1});
		tlRightBtnAnim.reverse();
		tlBase.play();
	});

//familiar with to contact

    $(btnSoloFw).click(function(){
    	TweenMax.to(textRightFwClick, 1, {autoAlpha: 0, x: 100});
        TweenMax.fromTo(textRightContact, 1, {autoAlpha: 0, x: 100}, {autoAlpha: 1, x: 0, delay: 1});
		TweenMax.to(btnSoloAll, 1, {autoAlpha: 0, delay: 1});
		TweenMax.to(btnSolo, 1, {autoAlpha: 0, delay: 1});
		TweenMax.to(btnSolo, 2, {y: 100, autoAlpha: 0, ease:Power4.easeOut});
		tlBase.play();
	});

	//mouse over and leave animation

	$(btnSoloAll).mouseover(function(){
        tlAnimButtonAfterClick.play();
	});

	$(btnSoloAll).mouseleave(function(){
        tlAnimButtonAfterClick.reverse();
	});

//RED BUTTON ANIM

	$(redDeskClick).click(function() {
      var clicks = $(redDeskClick).data('clicks');
      if (clicks) {
         tlShowEyes.reverse();
         tlShowMonster.reverse();
      } else {
         tlShowEyes.play();
         tlShowMonster.play();
      }
      $(redDeskClick).data("clicks", !clicks);
    });

	$(redTabletClick).click(function() {
      var clicks = $(redTabletClick).data('clicks');
      if (clicks) {
         tlShowEyesTablet.reverse();
         tlShowMonsterTablet.reverse();
      } else {
         tlShowEyesTablet.play();
         tlShowMonsterTablet.play();
      }
      $(redTabletClick).data("clicks", !clicks);
    });

	$(redPhoneClick).click(function() {
      var clicks = $(redPhoneClick).data('clicks');
      if (clicks) {
         tlShowEyesPhone.reverse();
         tlShowMonsterPhone.reverse();
      } else {
         tlShowEyesPhone.play();
         tlShowMonsterPhone.play();
      }
      $(redPhoneClick).data("clicks", !clicks);
    });

	$(redDeskClick).mouseover(function(){
        tlRedDeskAnim.play();
	});

	$(redDeskClick).mouseleave(function(){
        tlRedDeskAnim.reverse();
	});

	$(redTabletClick).mouseover(function(){
        tlRedTabletAnim.play();
	});

	$(redTabletClick).mouseleave(function(){
        tlRedTabletAnim.reverse();
	});

	$(redPhoneClick).mouseover(function(){
        tlRedPhoneAnim.play();
	});

	$(redPhoneClick).mouseleave(function(){
        tlRedPhoneAnim.reverse();
	});

//CONTACT

    $(sendBtn).mouseover(function(){
        tlSendBtn.play();
	});

	$(sendBtn).mouseleave(function(){
        tlSendBtn.reverse();
	});

	$(email).click(function(){
        tlPoststamp.play();
	});

	$(message).click(function(){
        tlStamp.play();
	});

//COLOR ANIMATION FOR ICON

	$(iconPython).mouseover(function(){
        TweenMax.to(iconPython, 0.25, {scale: 1.2, backgroundColor: 'rgba(216,19,35,0.9)'});
	});

	$(iconPython).mouseleave(function(){
        TweenMax.to(iconPython, 0.25, {scale: 1.0, backgroundColor: 'rgba(3,75,210,0.9)'});
	});

	$(iconDjango).mouseover(function(){
        TweenMax.to(iconDjango, 0.25, {scale: 1.2, backgroundColor: 'rgba(255,215,0,0.9)'});
	});

	$(iconDjango).mouseleave(function(){
        TweenMax.to(iconDjango, 0.25, {scale: 1.0, backgroundColor: 'rgba(102,187,209,0.9)'});
	});

	$(iconGs).mouseover(function(){
        TweenMax.to(iconGs, 0.25, {scale: 1.2, backgroundColor: 'rgba(255,215,0,0.9)'});
	});

	$(iconGs).mouseleave(function(){
        TweenMax.to(iconGs, 0.25, {scale: 1.0, backgroundColor: 'rgba(102,187,209,0.9)'});
	});

	$(iconJs).mouseover(function(){
        TweenMax.to(iconJs, 0.25, {scale: 1.2, backgroundColor: 'rgba(248,100,31,0.9)'});
	});

	$(iconJs).mouseleave(function(){
        TweenMax.to(iconJs, 0.25, {scale: 1.0, backgroundColor: 'rgba(17,126,218,0.9)'});
	});

	$(iconCss).mouseover(function(){
        TweenMax.to(iconCss, 0.25, {scale: 1.2, backgroundColor: 'rgba(248,100,31,0.9)'});
	});

	$(iconCss).mouseleave(function(){
        TweenMax.to(iconCss, 0.25, {scale: 1.0, backgroundColor: 'rgba(17,126,218,0.9)'});
	});

	$(iconHtml).mouseover(function(){
        TweenMax.to(iconHtml, 0.25, {scale: 1.2, backgroundColor: 'rgba(255,215,0,0.9)'});
	});

	$(iconHtml).mouseleave(function(){
        TweenMax.to(iconHtml, 0.25, {scale: 1.0, backgroundColor: 'rgba(102,187,209,0.9)'});
	});

	$(iconJquery).mouseover(function(){
        TweenMax.to(iconJquery, 0.25, {scale: 1.2, backgroundColor: 'rgba(248,100,31,0.9)'});
	});

	$(iconJquery).mouseleave(function(){
        TweenMax.to(iconJquery, 0.25, {scale: 1.0, backgroundColor: 'rgba(17,126,218,0.9)'});
	});

	$(iconToole).mouseover(function(){
        TweenMax.to(iconToole, 0.25, {scale: 1.2, backgroundColor: 'rgba(216,19,35,0.9)'});
	});

	$(iconToole).mouseleave(function(){
        TweenMax.to(iconToole, 0.25, {scale: 1.0, backgroundColor: 'rgba(3,75,210,0.9)'});
	});

	$(iconCpk).mouseover(function(){
        TweenMax.to(iconCpk, 0.25, {scale: 1.2, backgroundColor: 'rgba(248,100,31,0.9)'});
	});

	$(iconCpk).mouseleave(function(){
        TweenMax.to(iconCpk, 0.25, {scale: 1.0, backgroundColor: 'rgba(17,126,218,0.9)'});
	});

})(jQuery);



















