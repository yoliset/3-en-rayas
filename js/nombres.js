function validarLocal(){
    var jugador = $("#jugador1").val();
    localStorage.setItem("jugador1", jugador);
    var jugador = $("#jugador2").val();
    localStorage.setItem("jugador2", jugador);   
}
function validarTodo(){
    var jugador1 = $('#jugador1').val();
    var jugador2 = $('#jugador2').val();
    if ((/^[a-zA-Z]+$/.test(jugador1)==true)&&(/^[a-zA-Z]+$/.test(jugador2)==true)){
       gotoSection('juego');
       validarLocal();
    }else{
        alert("Coloca tu nombre");
    }
}

function nombres(){
    
    
}
