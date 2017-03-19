$(document).ready(init);

var currentSection = null;
var currentGameID;

function init() {
	currentSection = $('#saludo');
	$('#btn-saludo').click(onClickBtnSaludo);
    $('#btn-nombres').click(onClickBtnNombre);
	$('#btn-historial').click(onClickBtnHistorial);
	$('#btn-history').click(onClickBtnHistorial);
	$('#btn-comentar').click(onClickBtnComentar);
	$('#btn-inicio').click(onClickBtnInicio);

	$('#lista-juegos').on('click', 'button', onClickBtnItemJuego);


	TweenMax.from($('#saludo h1'), 1, {marginBottom: '0px', ease: Elastic.easeOut});
	TweenMax.from($('.uno '), 1, {marginBottom: '0px', ease: Elastic.easeOut});
}

function onClickBtnItemJuego()
{
	var idGame = $(this).parent().data('idgame');
	console.log(idGame);
	gotoSection('historial-detalle');
	getComentarios(idGame);
	currentGameID = idGame;
	//getSingleGame(idGame);
}
function onClickBtnSaludo() {
	gotoSection('nombres');
}
function onClickBtnInicio() {
	gotoSection('saludo');
}
function onClickBtnNombre() {
	var jugador1 = $('#jugadoruno').val();
    var jugador2 = $('#jugadordos').val();
    if ((/^[a-zA-Z]+$/.test(jugador1)==true)&&(/^[a-zA-Z]+$/.test(jugador2)==true)){
		var jugadorUno = $('#jugadoruno').val();
		localStorage.setItem('jugador01', jugadorUno);
		
		var jugadorDos = $('#jugadordos').val();
		localStorage.setItem('jugador02', jugadorDos);
		
         gotoSection('juego');
	}else{
		 alert("Coloca tu nombre");
	} 
	
}
function onClickBtnHistorial(evt) {
	evt.preventDefault();
	gotoSection('historial');
	getHistorial();
}
function onClickBtnComentar()
{
     var name= $("#name");
    var content = $("#content");
    
    var mensaje= $("#alert");
    if(name.val()!=""){
        mensaje.html("Tu comentario ha sido agregado exitosamente");
        enviarComentario(currentGameID, $('#name').val(), $('#content').val());
    }
    else{
        mensaje.html("Comentario inválido");
    }
    name.val("");
    content.val("");
}
function enviarComentario(_idGame, _name, _content)
{
	$.ajax({
		url:'https://test-ta.herokuapp.com/games/'+_idGame+'/comments',
		type:'POST',
		data:{comment:{ name:_name, content:_content, game_id:_idGame }}
	}).success(function(_data){
		console.log(_data);
		getComentarios(_idGame);
	});
}

function gotoSection(_identificadorDeSeccion) {
	currentSection.removeClass('visible');
	var nextSection = $('#' + _identificadorDeSeccion);

	nextSection.addClass('visible');

	TweenMax.from(nextSection, 1.5, {scale: 0.2, opacity: 0, ease: Elastic.easeOut});
	currentSection = nextSection;
}

function getHistorial() {
	$.ajax({
		url: 'https://test-ta.herokuapp.com/games'
	}).success(function (_data) {
		dibujarHistorial(_data);
	});
}

function getSingleGame(_idGame)
{
	$.ajax({
		url: 'https://test-ta.herokuapp.com/games/' + _idGame,
		type:'GET'
	}).success(function(_data){
		console.log(_data);
	});
}

function getComentarios(_idGame)
{
	$.ajax({
		url: 'https://test-ta.herokuapp.com/games/'+_idGame+'/comments',
		type:'GET'
	}).success(function(_data){
		console.log(_data);
		dibujarComentarios(_data);
	});
}
function dibujarComentarios(_datos)
{
	var lista = $('#lista-comentarios');
	lista.empty();
	for(var i in _datos)
	{
		var html = '<li class="list-group-item">'+_datos[i].name+' dice: <p>'+ _datos[i].content +'</p></li>';
		lista.append(html);
	}
}
function dibujarHistorial(_datos) {
	var lista = $('#lista-juegos');

	for (var i in _datos) {
		console.log(_datos[i].winner_player);

		var html = '<li data-idgame="'+ _datos[i].id +'" class="list-group-item">' + _datos[i].winner_player + ' le gano a '+ _datos[i].loser_player +' en ' + _datos[i].number_of_turns_to_win + ' movimientos <br><button class="btn">Comentar</button></li>';
		lista.append(html);
	}
}

//JUEGO
function Tablero(){
    var gamer1 =localStorage.getItem('jugador01');
    var gamer2 =localStorage.getItem('jugador02');
		//listas de propiedades
		this.casillas = new Array(3);
		for(var i=0; i<3; i++){
			this.casillas[i] = new Array(3);
			}
		this.detectarLineaDiagonal1 = function(casillas){
				if(this.casillas[0][0] != undefined && this.casillas[0][0] == this.casillas[1][1] && this.casillas[1][1] == this.casillas[2][2]){
				return true;}		
			}
		this.detectarLineaDiagonal2 = function(casillas){
				if(this.casillas[0][2] != undefined && this.casillas[0][2] == this.casillas[1][1] && this.casillas[1][1] == this.casillas[2][0]){
				return true;}		
			}
		this.detectarLineaHorizontal = function(casillas){
			for(var fila=0; fila<3; fila++){
				if(this.casillas[fila][0] !=undefined && this.casillas[fila][0] == this.casillas[fila][1] && this.casillas[fila][1] == this.casillas[fila][2]){
				return true;}
				}		
			}
		this.detectarLineaVertical = function(casillas){
			for(var col=0; col<3; col++){
				if(this.casillas[0][col] !=undefined && this.casillas[0][col] == this.casillas[1][col] && this.casillas[1][col] == this.casillas[2][col])
				{return true;}
				}
			}
        
		this.empezar = function(){
			for(a=0; a<3; a++){
				for(b=0; b<3; b++){
					this.casillas[a][b] = undefined;
					document.getElementById("casilla" + a + b).innerHTML = "";
					this.numMovimientos = 1;
				}
			}
		}
        var moviuno = 0;
        var movidos = 0;
        this.marcarMovimiento = function(fila,col){
				//si no ha termniando la partida
		 var gamer1 =localStorage.getItem('jugador01');
         var gamer2 =localStorage.getItem('jugador02');
					//si la casilla no está ocupada
					if(this.casillas[fila][col] == undefined){
					//la ocupamos
					//this.casillas[fila][col] = "X";
					if(this.numMovimientos % 2 == 0){
					document.getElementById("casilla" + fila + col).innerHTML = "X";
					this.casillas[fila][col] = "X";
                    var jugador = $('#jugador1').html('Turno de X: '+gamer1);
                    this.continuarPartida(gamer1);
                    moviuno ++;
                        $("#movimiento1").html('Movimiento de '+gamer1+' : '+moviuno);
                        
					}
    
					else if(this.numMovimientos % 2 !== 0){
					document.getElementById("casilla" + fila + col).innerHTML = "O";
					this.casillas[fila][col] = "O"; 
                    var jugador = $('#jugador1').html('Turno de O: '+gamer2);
                        this.continuarPartida(gamer2);
                        //Para obtener mis movimientos
                    movidos ++;
                        $("#movimiento2").html('Movimiento de '+gamer2+' : '+movidos);
					}
					//incrementamos el número de movimientos
					this.numMovimientos++;
					//comprobar si sigue al partida
							if(this.numMovimientos < 10){
								this.continuarPartida();
							}
							else{
								var jugador = $('#jugador1').html("Empate");
								this.empezar();
												 }
					}
				}
        this.numMovimientos = 1;
			this.continuarPartida = function(casillas){
			if(this.detectarLineaDiagonal1() || this.detectarLineaDiagonal2() || this.detectarLineaHorizontal() || this.detectarLineaVertical()){
                var ganador = $('#jugador1').html('Gano: '+casillas);
				this.numMovimientos = 1;
				this.empezar();
                //para guardar en localStorage mi ganador
                if(this.continuarPartida() == gamer1.val){
                localStorage.setItem('ganador',casillas);
                localStorage.setItem('loser',gamer2);
                localStorage.setItem('movimiento',moviuno);
            }else if(this.continuarPartida() == gamer2.val){
                localStorage.setItem('ganador',casillas);
                localStorage.setItem('loser',gamer1);
                localStorage.setItem('movimiento',movidos);
                  }
				}
			}
           
		}
		//obtenemos las celdas de la tabla
		var celdas = document.getElementsByTagName("td");

		for(var i=0; i<celdas.length; i++){
		//asignamos el manejador a todas las celdas
			celdas[i].onclick = function(){
				var fila = this.id.substr(-2, 1);
				var columna = this.id.substr(-1);			
				tresEnRaya.marcarMovimiento(fila,columna);
			}
		}
		tresEnRaya = new Tablero();
//para push a mi ganador
$("#btn-history").click(pushHistorial);

function pushHistorial(){
    var ganador= localStorage.getItem("ganador");
    var loser= localStorage.getItem("loser");
    var movimiento= localStorage.getItem("movimiento");
    $.ajax({
        url:"https://test-ta.herokuapp.com/games",
        data: {game:{winner_player:ganador, loser_player:loser, number_of_turns_to_win:movimiento}},
        type: "POST"
    }).done(function(_data){
        getHistorial();
    })
}
