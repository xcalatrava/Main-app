var stage_carta_dia;
var layer_carta_dia;
var group_carta_dia;
var carta_dia;

var x = 0, y = 0,
    vx = 0, vy = 0,
	ax = 0, ay = 0;


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function isNearOutline(carta, carta_escogida) {
    var a = carta;
    var o = carta_escogida;
    var ax = a.getX()-50;
    var ay = a.getY()+81;
    var ox = o.getX();
    var oy = o.getY();



    if (Math.abs(ax - ox) < 50 && Math.abs(ay - oy) < 50) {
        $("footer h1").html(a.attrs.id + " en " + o.attrs.name);
        return true;
    } else {
        return false;
    }
}

function Loadimages(callback) {
    var sources = {
        reverso: './images/Reverso.jpg',
		carta0: './images/00.jpg',
        carta1: './images/01.jpg',
        carta2: './images/02.jpg',
        carta3: './images/03.jpg',
        carta4: './images/04.jpg',
        carta5: './images/05.jpg',
        carta6: './images/06.jpg',
        carta7: './images/07.jpg',
        carta8: './images/08.jpg',
        carta9: './images/09.jpg',
        carta10: './images/10.jpg',
        carta11: './images/11.jpg',
        carta12: './images/12.jpg',
        carta13: './images/13.jpg',
        carta14: './images/14.jpg',
        carta15: './images/15.jpg',
        carta16: './images/16.jpg',
        carta17: './images/17.jpg',
        carta18: './images/18.jpg',
        carta19: './images/19.jpg',
        carta20: './images/20.jpg',
        carta21: './images/21.jpg', 
		carta0r: './images/00r.jpg',		
        carta1r: './images/01r.jpg',
        carta2r: './images/02r.jpg',
        carta3r: './images/03r.jpg',
        carta4r: './images/04r.jpg',
        carta5r: './images/05r.jpg',
        carta6r: './images/06r.jpg',
        carta7r: './images/07r.jpg',
        carta8r: './images/08r.jpg',
        carta9r: './images/09r.jpg',
        carta10r: './images/10r.jpg',
        carta11r: './images/11r.jpg',
        carta12r: './images/12r.jpg',
        carta13r: './images/13r.jpg',
        carta14r: './images/14r.jpg',
        carta15r: './images/15r.jpg',
        carta16r: './images/16r.jpg',
        carta17r: './images/17r.jpg',
        carta18r: './images/18r.jpg',
        carta19r: './images/19r.jpg',
        carta20r: './images/20r.jpg',
        carta21r: './images/21r.jpg',
    };


    var images = {};
    var loadedImages = 0;
    var numImages = 0;

    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function() {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}

function Muestra_cartas(images) {

    group_baraja.visible(false);
    group_baraja.destroy();

    var cartas = group_escogidas.find('Image');

    var escala = (stage.getWidth() - 20)/2;

    escala = escala / cartas[0].width();

    var imageObj = new Image();



    //animacion para mostrar carta escogida 1

    var imageObj = images[cartas[0].id()+"r"];
        var imageObj1 = images[cartas[1].id()+"r"];



    var tl = new TimelineLite();
    tl.to(cartas[0], 1, {
        kinetic: {
            x: 0,
            y: (stage.getHeight() - cartas[0].height() * escala) / 2,
            scale: escala
        },
        ease: Power4.easeOut
    })
        .to(cartas[0], 1, {
            kinetic: {
                x: cartas[0].width() * escala,
                scaleX: 0
            },
            onComplete: function() {
                cartas[0].setImage(imageObj);
            }
        })
        .to(cartas[0], 1, {
            kinetic: {
                scaleX: -escala
            }
        });


    // animacion para mostrar carta escogida 2

    var tl2 = new TimelineLite();
    tl.to(cartas[1], 1, {
        kinetic: {
            x: cartas[1].width() * escala + 20,
            y: (stage.getHeight() - cartas[1].height() * escala) / 2,
            scale: escala
        },
        ease: Power4.easeOut
    })
        .to(cartas[1], 1, {
            kinetic: {
                x: (cartas[1].width() * escala * 2) + 20,
                scaleX: 0
            },
            onComplete: function() {
                cartas[1].setImage(imageObj1);
            }
        })
        .to(cartas[1], 1, {
            kinetic: {
                scaleX: -escala
            }
        });
}



function Inicializa_mesa_dia(images) {

	stage_carta_dia = new Kinetic.Stage({
		container: 'container-carta-dia',
		width: $("#container-carta-dia").width(),
		height: (window.innerHeight / 100) * 80,
	});

	group_carta_dia = new Kinetic.Group();

	layer_carta_dia = new Kinetic.Layer();

	var lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
	shuffleArray(lista);

	for (var n = 0; n < 22; n++) {
		(function () {


			var imageObj = new Image();
			var imageObj = images.reverso;

			var rectangle = new Kinetic.Image({
				x: (stage_carta_dia.getWidth() / 2 - 50),
				y: (stage_carta_dia.getHeight() / 2 - 200),
				width: 100,
				height: 163,
				stroke: 'black',
				strokeWidth: 1,
				name: 'carta',
				id: 'carta' + lista[n],
				escogida: false,
				draggable: true,
				image: imageObj,
			});

			group_carta_dia.add(rectangle);

			// rectangle.on('mouseover ', function(evt) {



		})();
	}


	layer_carta_dia.add(group_carta_dia);


	stage_carta_dia.add(layer_carta_dia);

	stage_carta_dia.draw();


}


function boundingBoxCheck(){
	if (x<0) { x = 0; vx = -vx; }
	if (y<0) { y = 0; vy = -vy; }
	if (x>document.documentElement.clientWidth-20) { x = document.documentElement.clientWidth-20; vx = -vx; }
	if (y>document.documentElement.clientHeight-20) { y = document.documentElement.clientHeight-20; vy = -vy; }
	
}



var timer_dia = 200;

function startAccelerometer() {

	timer_dia = setInterval(function () {

		//		console.log("ax" + ax + " ay" + ay + " vx" + vx + " vy" + vy);

		if (group_carta_dia) {
			var cartas = group_carta_dia.find('Image');

			for (var carta = 0; carta < 23; carta++) {
				new_x = cartas[carta].x() + (vx * Math.random());
				new_y = cartas[carta].y() + (vy * Math.random());
				//			boundingBoxCheck(new_x, new_y);
				cartas[carta].x(new_x);
				cartas[carta].y(new_y);
				layer_carta_dia.draw();

			}
		}
		if(vx>0){
		vx = ax * -1;
		}
		if(vy >0){
		vy = ay * -1;
		}
	})

}

// Stop watching the acceleration
//
function stopAccelerometer() {
	clearInterval(timer_dia);
}

