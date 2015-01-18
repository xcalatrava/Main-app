$(document).on("pagecontainershow", function () {
	var activePage = $.mobile.pageContainer.pagecontainer("getActivePage");

	var activePageId = activePage[0].id;
	switch (activePageId) {
	case 'home':
		stopAccelerometer();
		var tl = new TimelineLite();
		tl.fromTo($("#btn-baraja"), 1, {
			left: "-200px"
		}, {
			left: "0px",
			ease: Linear.easeNone
		});
		tl.fromTo($("#btn-carta-dia"), 1, {
			left: "-250px"
		}, {
			left: "0px",
			ease: Linear.easeNone
		}, "-=1");
		tl.fromTo($("#btn-numerologia"), 1, {
			left: "-300px"
		}, {
			left: "0px",
			ease: Linear.easeNone
		}, "-=1");
		tl.fromTo($("#btn-tirada-rapida"), 1, {
			left: "-300px"
		}, {
			left: "0px",
			ease: Linear.easeNone
		}, "-=1");
		tl.fromTo($("#btn-tirada-meditacion"), 1, {
			left: "-250px"
		}, {
			left: "0px",
			ease: Linear.easeNone
		}, "-=1");
		tl.fromTo($("#btn-historico"), 1, {
			left: "-250px"
		}, {
			left: "0px",
			ease: Linear.easeNone
		}, "-=1");
		break;
	case 'carta-dia':
		Loadimages(Inicializa_mesa_dia);
		window.addEventListener('devicemotion', function (event) {
			ax = Math.floor(event.accelerationIncludingGravity.x * 10);
			ay = Math.floor(event.accelerationIncludingGravity.y * 10);
			if (ax < 10 && ax > 10){ax=0};
			if (ay < 10 && ay > 10){ay=0};
			vx = vx - ax;
			vy= vy - ay;
//			if (vx<20 && vx>-20){vx=ax};
//			if (vy<20 && vy>-20){vy=ay};
			
			$("#posicion_acelerometro").html("vx: " + vx + " vy: " + vy);

		});
		startAccelerometer();
		break;
	}
});


$(function(){

  $( "#carta-baraja" ).on( "swipeleft", DesplazaCartaIzquierda );
  $( "#carta-baraja" ).on( "swiperight", DesplazaCartaDerecha );
 

  function DesplazaCartaIzquierda(event) {
  	var tl = new TimelineLite();
  	tl.to($("#carta-baraja"), 1, {
  		left: "-500px",
  		ease: Linear.easeNone
  	});
  	baraja.push(baraja.shift());
  	definiciones_arcanos.push(definiciones_arcanos.shift());
  	$("#carta-baraja").attr('src', baraja[0]);
  	$("#explicacion-arcano").html(definiciones_arcanos[0])
  	tl.fromTo($("#carta-baraja"), 1, {
  		left: "500px"
  	}, {
  		left: "100px",
  		ease: Linear.easeNone
  	});
  }

  function DesplazaCartaDerecha(event) {
  	var tl = new TimelineLite();
  	tl.to($("#carta-baraja"), 1, {
  		left: "-500px",
  		ease: Linear.easeNone
  	});
  	baraja.unshift(baraja.pop());
  	definiciones_arcanos.unshift(definiciones_arcanos.pop());

  	$("#carta-baraja").attr('src', baraja[0]);
  	$("#explicacion-arcano").html(definiciones_arcanos[0])
  	tl.fromTo($("#carta-baraja"), 1, {
  		left: "500px"
  	}, {
  		left: "100px",
  		ease: Linear.easeNone
  	});
  }
	
	
	$("#reset_dia").click(function () {
		Loadimages(Inicializa_mesa_dia);
		startAccelerometer();
	});
	$("#info_dia").click(function () {
		$("#explicacion-carta-dia").html(textos_dia[0]);
		stopAccelerometer();
	});

});


