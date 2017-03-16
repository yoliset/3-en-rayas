function validarLocal(){
    var jugador = $("#jugadoruno").val();
    localStorage.setItem("jugadoruno", jugador);
    var jugador = $("#jugadordos").val();
    localStorage.setItem("jugadordos", jugador);   
}
function validarTodo(){
    var jugador1 = $('#jugadoruno').val();
    var jugador2 = $('#jugadordos').val();
    if ((/^[a-zA-Z]+$/.test(jugador1)==true)&&(/^[a-zA-Z]+$/.test(jugador2)==true)){
       gotoSection('juego');
       validarLocal();
    }else{
        alert("Coloca tu nombre");
    }
}

function nombres(){
    
    
}
