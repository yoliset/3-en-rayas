
///variables globales para el juego
var jugador1=false, jugador2=false, posj1, posj2;
var p1j1="", p2j1="", p3j1="", p4j1="", p5j1="", p6j1="", p7j1="", p8j1="", p9j1="";
var p1j2="", p2j2="", p3j2="", p4j2="", p5j2="", p6j2="", p7j2="", p8j2="", p9j2="";
var cont=0;
var JuegoFinalizado=false;
var objPrimero;
var x;
$(document).ready(function () { 

    //boton para iniciar el juego
    $("#botonIniciarJuego").click(function(){
        //iniciamos el juego llamando a la función
        $.funcionIniciarJuego();
    });

    //funcion para iniciar el juego
    $.funcionIniciarJuego=function(){
        //reseteamos variables globales
        JuegoFinalizado=false;
        cont=0;
        jugador1=false;
        jugador2=false;
        objPrimero=undefined;
        objSegundo=undefined;
        $.functionJugada();
        cont++;
        $("#jugador1").val("Jugador 1 su turno!!");
    }

    $.functionJugada=function(){
        if (!JuegoFinalizado && cont<9){
          
        $("#uno, #dos, #tres, #cuatro, #cinco, #seis, #siete, #ocho, #nueve").click(function(){
            
        if(objPrimero==undefined)
        {	
            objPrimero=$(this);
 //comprovamos donde ha clicado exactamente y lo guardamos en una variable de casilla-jugador
            if(objPrimero.attr("id")=="uno" && p1j1=="")
            {
				if(p1j1=="" && p1j2=="")
				{
				p1j1=objPrimero.attr("id");
				cont++;
						}
                }else
                     if(objPrimero.attr("id")=="dos"  && p2j1=="")
                        {
				       if(p2j1=="" && p2j2=="")
							{
				        p2j1=objPrimero.attr("id");
				        cont++;
							}
                        }else
                            if(objPrimero.attr("id")=="tres"  && p3j1=="")
                            {
								if(p3j1=="" && p3j2=="")
								{
									p3j1=objPrimero.attr("id");
									cont++;
								}
                            }else
                                if(objPrimero.attr("id")=="cuatro"  && p4j1=="")
                                {
									if(p4j1=="" && p4j2=="")
									{
										p4j1=objPrimero.attr("id");
										cont++;
									}
                                }else
                                    if(objPrimero.attr("id")=="cinco" && p5j1=="")
                                    {
										if(p5j1=="" && p5j2=="")
										{
											p5j1=objPrimero.attr("id");
											cont++;
										}
                                    }else
                                        if(objPrimero.attr("id")=="seis" && p6j1=="")
                                        {
											if(p6j1=="" && p6j2=="")
											{
												p6j1=objPrimero.attr("id");
												cont++;
											}
                                        }else
                                            if(objPrimero.attr("id")=="siete" && p7j1=="")
                                            {
												if(p7j1=="" && p7j2=="")
												{
													p7j1=objPrimero.attr("id");
													cont++;
												}
                                            }else
                                                if(objPrimero.attr("id")=="ocho" && p8j1=="")
                                                {
													if(p8j1=="" && p8j2=="")
													{
														p8j1=objPrimero.attr("id");
														cont++;
													}
                                                }else
                                                    if(objPrimero.attr("id")=="nueve" && p9j1=="")
                                                    {
														if(p9j1=="" && p9j2=="")
														{
															p9j1=objPrimero.attr("id");
															cont++;
														}
                                                    }
                                     //Jugador 1 gana horizontales

                                                    if(p1j1=="uno" && p2j1=="dos" && p3j1=="tres")
                                                    {
                                                        alert("has ganado Jugador 1!");
                                                        jugador1=true;
                                                        JuegoFinalizado=true;
                                                        location.reload();
                                                    }else
                                                        if(p4j1=="cuatro" && p5j1=="cinco" && p6j1=="seis")
                                                        {
                                                            alert("has ganado Jugador 1!");
                                                            jugador1=true;
                                                            JuegoFinalizado=true;
                                                            location.reload();
                                                        }else
                                                            if(p7j1=="siete" && p8j1=="ocho" && p9j1=="nueve")
                                                            {
                                                                alert("has ganado Jugador 1!");
                                                                jugador1=true;
                                                                JuegoFinalizado=true;
                                                                location.reload();
                                                            }
                                                    //jugador 1 gana verticales

                                                    if(p1j1=="uno" && p4j1=="cuatro" && p7j1=="siete")
                                                    {
                                                        alert("has ganado Jugador 1!");
                                                        jugador1=true;
                                                        JuegoFinalizado=true;
                                                        location.reload();
                                                    }else
                                                        if(p2j1=="dos" && p5j1=="cinco" && p8j1=="ocho")
                                                        {
                                                            alert("has ganado Jugador 1!");
                                                            jugador1=true;
                                                            JuegoFinalizado=true;
                                                            location.reload();
                                                        }else
                                                            if(p3j1=="tres" && p6j1=="seis" && p9j1=="nueve")
                                                            {
                                                                alert("has ganado Jugador 1!");
                                                                jugador1=true;
                                                                JuegoFinalizado=true;
                                                                location.reload();
                                                            }
                                                    //jugador 1 gana diagonales

                                                    if(p1j1=="uno" && p5j1=="cinco" && p9j1=="nueve")
                                                    {
                                                        alert("has ganado Jugador 1!");
                                                        jugador1=true;
                                                        JuegoFinalizado=true;
                                                        location.reload();
                                                    }else
                                                        if(p3j1=="tres" && p5j1=="cinco" && p7j1=="siete")
                                                        {
                                                            alert("has ganado Jugador 1!");
                                                            jugador1=true;
                                                            JuegoFinalizado=true;
                                                            location.reload();
                                                        }
                                                        //empatado!! nadie gana
                                                         else
                                                            if(cont>9 && JuegoFinalizado==false)
                                                            {
                                                                alert("has empatado!!!");
                                                                location.reload();
                                                            }

                        objPrimero.html("<center><img width='45' id='j1' src='img/j1.png'></center>");
                        $("#jugador1").val("Jugador 1");
                        $("#jugador2").val("Jugador 2 su turno!!");
       
                    
                }
                else{
                    var objSegundo=$(this);
                    if(objSegundo.attr("id")=="uno" && p1j1=="")
                    {
						if(p1j1=="" && p1j2=="")
						{
							p1j2=objSegundo.attr("id");
							cont++;
						}
                    }else
//comprovamos donde ha clicado exactamente y lo guardamos en una variable de casilla-jugador
                        if(objSegundo.attr("id")=="dos" && p2j2=="")
                        {
							if(p2j1=="" && p2j2=="")
							{
								p2j2=objSegundo.attr("id");
								cont++;
							}
                        }else
                            if(objSegundo.attr("id")=="tres" && p3j2=="")
                            {
								if(p3j1=="" && p3j2=="")
								{
									p3j2=objSegundo.attr("id");
									cont++;
								}
                            }else
                                if(objSegundo.attr("id")=="cuatro" && p4j2=="")
                                {
									if(p4j1=="" && p4j2=="")
									{
										p4j2=objSegundo.attr("id");
										cont++;
									}
                                }else
                                    if(objSegundo.attr("id")=="cinco" && p5j2=="")
                                    {
										if(p5j1=="" && p5j2=="")
										{
											p5j2=objSegundo.attr("id");
											cont++;
										}
                                    }else
                                        if(objSegundo.attr("id")=="seis" && p6j2=="")
                                        {
											if(p6j1=="" && p6j2=="")
											{
												p6j2=objSegundo.attr("id");
												cont++;
											}
                                        }else
                                            if(objSegundo.attr("id")=="siete" && p7j2=="")
                                            {
												if(p7j1=="" && p7j2=="")
												{
													p7j2=objSegundo.attr("id");
													cont++;
												}
                                            }else
                                                if(objSegundo.attr("id")=="ocho" && p8j2=="")
                                                {
													if(p8j1=="" && p8j2=="")
													{
														p8j2=objSegundo.attr("id");
														cont++;
													}
                                                }else
                                                    if(objSegundo.attr("id")=="nueve" && p9j2=="")
                                                    {
														if(p9j1=="" && p9j2=="")
														{
															p9j2=objSegundo.attr("id");
															cont++;
														}
                                                    }
                                               //Jugador 2 gana horizontales
                                                    if(p1j2=="uno" && p2j2=="dos" && p3j2=="tres")
                                                    {
                                                        alert("has ganado Jugador 2!");
                                                        jugador2=true;
                                                        JuegoFinalizado=true;
                                                        location.reload();
                                                    }else
                                                        if(p4j2=="cuatro" && p5j2=="cinco" && p6j2=="seis")
                                                        {
                                                            alert("has ganado Jugador 2!");
                                                            jugador2=true;
                                                            JuegoFinalizado=true;
                                                            location.reload();
                                                        }else
                                                            if(p7j2=="siete" && p8j2=="ocho" && p9j2=="nueve")
                                                            {
                                                                alert("has ganado Jugador 2!");
                                                                jugador2=true;
                                                                JuegoFinalizado=true;
                                                                location.reload();
                                                            }
                                                    //jugador 2 gana verticales

                                                    if(p1j2=="uno" && p4j2=="cuatro" && p7j2=="siete")
                                                    {
                                                        alert("has ganado Jugador 2!");
                                                        jugador2=true;
                                                        JuegoFinalizado=true;
                                                        location.reload();
                                                    }else
                                                        if(p2j2=="dos" && p5j2=="cinco" && p8j2=="ocho")
                                                        {
                                                            alert("has ganado Jugador 2!");
                                                            jugador2=true;
                                                            JuegoFinalizado=true;
                                                            location.reload();
                                                        }else
                                                            if(p3j2=="tres" && p6j2=="seis" && p9j2=="nueve")
                                                            {
                                                                alert("has ganado Jugador 2!");
                                                                jugador2=true;
                                                                JuegoFinalizado=true;
                                                                location.reload();
                                                            }
                                                    //jugador 2 gana diagonales

                                                    if(p1j2=="uno" && p5j2=="cinco" && p9j2=="nueve")
                                                    {
                                                        alert("has ganado Jugador 2!");
                                                        jugador2=true;
                                                        JuegoFinalizado=true;
                                                        location.reload();
                                                    }else
                                                        if(p3j2=="tres" && p5j2=="cinco" && p7j2=="siete")
                                                        {
                                                            alert("has ganado Jugador 2!");
                                                            jugador2=true;
                                                            JuegoFinalizado=true;
                                                            location.reload();
                                                        }
                    if(objPrimero.index()!=objSegundo.index()){
                        objSegundo.html("<center><img width='45' id='j2' src='img/j2.png'></center>");
                        $("#jugador2").val("Jugador 2");
                        $("#jugador1").val("Jugador 1 su turno!!");                        
                    }
                    objPrimero=undefined;
                }
            });
        }
    }
 
});  
