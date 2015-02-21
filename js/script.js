$(function() {

    $(document).on("pagecontainershow", function() {
        var current = $(".ui-page-active").attr('id');
        console.log("current" + current);
    });
    $("#carta-dia").on("pagecontainershow", function() {
        Loadimages(Inicializa_mesa_dia);
    });



    $("#carta-baraja").on("swipeleft", DesplazaCartaIzquierda);
    $("#carta-baraja").on("swiperight", DesplazaCartaDerecha);

    $("#reset_dia").click(function() {
        Loadimages(Inicializa_mesa_dia);
        // startAccelerometer();
    });
    $("#info_dia").click(function() {
        $("#explicacion-carta-dia").html(textos_dia[0]);
        // stopAccelerometer();
    });

})


  function DesplazaCartaIzquierda(event) {

      baraja.push(baraja.shift());
      definiciones_arcanos.push(definiciones_arcanos.shift());
      $("#carta-baraja").attr('src', baraja[0]);
      $("#explicacion-arcano").html(definiciones_arcanos[0]);

  }



  function DesplazaCartaDerecha(event) {

      baraja.unshift(baraja.pop());
      definiciones_arcanos.unshift(definiciones_arcanos.pop());

      $("#carta-baraja").attr('src', baraja[0]);
      $("#explicacion-arcano").html(definiciones_arcanos[0]);

  }



