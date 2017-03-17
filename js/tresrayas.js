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
					if(this.numMovimientos % 2 !== 0){
					document.getElementById("casilla" + fila + col).innerHTML = "X";
					this.casillas[fila][col] = "X";
                    var jugador = $('#jugador1').html('Turno de: '+gamer1);
                    this.continuarPartida(gamer1);
                    moviuno ++;
                        $("#movimiento1").html('Movimiento de '+gamer1+' : '+moviuno);
                        
					}
    
					else if(this.numMovimientos % 2 == 0){
					document.getElementById("casilla" + fila + col).innerHTML = "O";
					this.casillas[fila][col] = "O"; 
                    var jugador = $('#jugador1').html('Turno de: '+gamer2);
                        this.continuarPartida(gamer2);
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
