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
    if ((/^[a-zA-Z]+$/.test(jugador1)!==true)&&(/^[a-zA-Z]+$/.test(jugador2)!==true)){
		alert('Coloca tu nombre');
	}else{
		var jugadorUno = $('#jugadoruno').val();
		localStorage.setItem('jugador01', jugadorUno);
		
		var jugadorDos = $('#jugadordos').val();
		localStorage.setItem('jugador02', jugadorDos);
		
		
		gotoSection('juego');
	} 
	
}
function onClickBtnHistorial(evt) {
	evt.preventDefault();
	gotoSection('historial');
	getHistorial();
}
function onClickBtnComentar()
{
	enviarComentario(currentGameID, $('#name').val(), $('#content').val());
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

		var html = '<li data-idgame="'+ _datos[i].id +'" class="list-group-item">' + _datos[i].winner_player + ' le gano a '+ _datos[i].loser_player +' en ' + _datos[i].number_of_turns_to_win + ' movimientos <button class="btn">Comentar</button></li>';
		lista.append(html);
	}
}

function enviarJuego(_win, _loser, _movimientosWin){
	$.ajax({
		url:'https://test-ta.herokuapp.com/games',
		type:'POST',
		data:{game: {
    winner_player: _win,
    loser_player: _loser,
    number_of_turns_to_win: _movimientosWin
  }}
	}).done(function(_data){
		console.log(_data);
	});
}
