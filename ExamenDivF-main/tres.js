/*
Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Oriente”, “Occidente”, “Secreto”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas
b- El promedio por vuelo de vacunas llegadas de Occidente
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 25%, Si se recibieron entre 5 y 8 millones el descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento
*/


function mostrar()
{
	let
	origen,
	cantidadVacunas,
	costoVuelo,

	//a-
	menorCantidadVacunas=0,
	origenMenosVacunas,
	flagA = 1,

	//b
	contadorVuelos=0,
	promedioVacunasOccidente=0,
	contadorOccidente=0,

	//c
	costoVuelototal,
	acumuladorCosto=0,

	//d
	descuento25= 0.75,
	descuento15= 0.85,
	acumuladorVacunas=0,



	respuesta;
	do {

		origen=prompt("ingrese origen: oriente / occidente / secreto").toLowerCase();
		while(origen!= "oriente" && origen != "occidente" && origen != "secreto")
		{
			origen=prompt("ERROR\ningrese origen: oriente / occidente / secreto").toLowerCase();

		}

		cantidadVacunas= parseInt(prompt("ingrese cantidad de Vacunas: (entre 500000 y 2500000) "));

		while(cantidadVacunas < 500000 || cantidadVacunas > 2500000)
		{
			cantidadVacunas= parseInt(prompt("ERROR\ningrese cantidad de Vacunas: (entre 500000 y 2500000)"));

		}

		costoVuelo= parseFloat(prompt("ingrese costo de vuelo: (entre 1 millón y 5 millones de pesos) "));
		
		while(costoVuelo < 1000000 || costoVuelo > 5000000)
		{
			costoVuelo= parseFloat(prompt("ERROR\ningrese costo de vuelo: (entre 1 millón y 5 millones de pesos) "));
			
		}
		//a-
		if(flagA || (cantidadVacunas < menorCantidadVacunas))
		{
			menorCantidadVacunas = cantidadVacunas;
			origenMenosVacunas = origen;
			flagA = 0;
		}

		//b-
		contadorVuelos++;

		if(origen == "occidente")
		{
			contadorOccidente++;
		}

		//c-
		acumuladorCosto+= costoVuelo;

		//d-
		acumuladorVacunas += cantidadVacunas;








		
	} while (respuesta == "s");


	//a-
	console.log("El origen que envió menor cantidad de vacunas es: " + origenMenosVacunas);

	//b-
	if(contadorOccidente >0)
	{
		promedioVacunasOccidente = contadorOccidente / contadorVuelos;
	}
	console.log ("El promedio por vuelo de vacunas llegadas de Occidente es: " + promedioVacunasOccidente);

	//c-
	costoVuelototal = contadorVuelos * acumuladorCosto;
	console.log ("El total sin descuentos a pagar por los gastos de los viajes es: " + costoVuelototal);


	//d-
	if(acumuladorVacunas >10000000 )
	{
		costoVuelototal = costoVuelototal * descuento25;
		
		console.log("tubo un descuento del 25%\nEl total con descuento es " + costoVuelototal)
	}
	else if (acumuladorVacunas >= 5000000 && acumuladorVacunas <= 8000000)
	{
		console.log("tubo un descuento del 15%\nEl total con descuento es " + costoVuelototal)
		costoVuelototal = costoVuelototal * descuento15;
	}

	console.log("El importe final es " + costoVuelototal);




}
