$(function () {

	var controller1 = new ScrollMagic.Controller({container: ".scroll_magic"});

	var scene = new ScrollMagic.Scene({triggerElement: '#you_see', duration: '100%', triggerHook: 0.5})
		.setClassToggle('#you_see', 'show_saint_tropez')
		.addTo(controller1);

	var controller2 = new ScrollMagic.Controller({container: ".scroll_magic"});

	var scene = new ScrollMagic.Scene({triggerElement: '#things_happen', duration: '100%', triggerHook: 0.5})
		.setClassToggle('#things_happen', 'show_saint_tropez')
		.addTo(controller2);

	var controller3 = new ScrollMagic.Controller({container: ".scroll_magic"});

	var scene = new ScrollMagic.Scene({triggerElement: '#when_you_scroll', duration: '100%', triggerHook: 0.5})
		.setClassToggle('#when_you_scroll', 'show_saint_tropez')
		.addTo(controller3);

	//Tablet
	var controller1 = new ScrollMagic.Controller({container: ".scroll_magic_tablet"});

	var scene = new ScrollMagic.Scene({triggerElement: '#you_see_tablet', duration: '100%', triggerHook: 0.5})
		.setClassToggle('#you_see_tablet', 'show_saint_tropez')
		.addTo(controller1);

	var controller2 = new ScrollMagic.Controller({container: ".scroll_magic_tablet"});

	var scene = new ScrollMagic.Scene({triggerElement: '#things_happen_tablet', duration: '100%', triggerHook: 0.5})
		.setClassToggle('#things_happen_tablet', 'show_saint_tropez')
		.addTo(controller2);

	var controller3 = new ScrollMagic.Controller({container: ".scroll_magic_tablet"});

	var scene = new ScrollMagic.Scene({triggerElement: '#when_you_scroll_tablet', duration: '100%', triggerHook: 0.5})
		.setClassToggle('#when_you_scroll_tablet', 'show_saint_tropez')
		.addTo(controller3);

});