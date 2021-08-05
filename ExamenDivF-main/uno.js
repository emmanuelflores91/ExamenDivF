
/*
Se necesita llevar el registro de un vacunatorio. 
Para ello se podrá registrar los datos de las personas 
vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la china
b- Nombre y vacuna de la hombre con más joven
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna mas inoculada
*/
function mostrar()
{ let
	nombre,
	edad,
	vacuna,
	dosis,
	sexo,
	//a-
	acumuladorEdad=0,
	contadorVacunadosChina=0,
	promedioEdadChina = 0,
	
	//b-
	edadHombreJoven,
	nombreHombreJoven,
	vacunaHombreJoven,
	flagB = 1,

	//c-	
	contadorVacunaAmericana=0,
	contadorMenores=0,
	porcentajeMenoresAmericana,

	//d-
	contadorVacunados=0,
	contadorUnaDosis=0,
	porcentajeUnaDosis,	

	//e-
	contadorChina=0,
	contadorRusa=0,
	contadorAmericana=0,


	respuesta;
	do
	{	
		nombre = prompt("Ingrese el nombre: \nPuede ingresar entre 3 y 10 caracteres");

		while(nombre.length < 3 || nombre.length > 10)
		{
			nombre = prompt("ERROR \nSólo puede ingresar entre 3 y 10 caracteres\nIntente nuevamente: ");
		}

		edad = parseInt(prompt("Ingrese la edad: \nDebe ser mayor o igual a 12"));
		
		while(edad < 12)
		{
			edad = parseInt(prompt("ERROR \nLa edad debe ser mayor o igual a 12"));
		}

		vacuna = prompt("Ingrese la vacuna: \nRusa / China / Americana").toLowerCase();
		
		if (edad >= 12 && edad <=17)
		{
			while (vacuna != "americana")
			vacuna = prompt("ERROR \n Entre 12 y 17 años inclusive, sólo se admite vacuna Americana").toLowerCase();	
		}

		while(vacuna != "rusa" && vacuna != "china" && vacuna != "americana")
		{
			vacuna = prompt("ERROR \nSólo puede ingresar Rusa / China / Americana").toLowerCase();			
		}

		dosis = prompt("Ingrese la dosis\np: primera \ns: segunda ").toLowerCase();
		
		while(dosis != "p" && dosis != "s")
		{
			dosis = prompt("ERROR\nSólo puede ingresa 'p' o 's'\np: primera \ns: segunda ").toLowerCase();			
		}
		
		sexo = prompt("Ingrese el sexo: \n'f' o 'm'").toLowerCase();
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR\nSólo puede ingresar el sexo: \n'f' o 'm'").toLowerCase();
		}
		

		//a-
		if (vacuna == "china")
		{
			acumuladorEdad += edad;
			contadorVacunadosChina ++;
		}

		//b-
		if(sexo == "m" && (flagB || edad < edadHombreJoven))
		{
			edadHombreJoven = edad;
			nombreHombreJoven = nombre;
			vacunaHombreJoven = vacuna;
			flagB = 0;			
		}

		//c-
		
		if(vacuna == "americana")
		{
			contadorVacunaAmericana++;

			if(edad < 18 )
			{
			contadorMenores++;
			}
		}

		//d-
		contadorVacunados++;

		if(dosis == "p")
		{
			contadorUnaDosis++;
		}
		
		//e-
		if(vacuna == "china")
		{
			contadorChina++;
		}
		else if (vacuna == "rusa")
		{
			contadorRusa++;
		}
		else
		{
			contadorAmericana++;
		}


		respuesta = prompt("Ingrese 'S' para ingresar otra persona, de lo contrario toque cualquier tecla").toLowerCase();

	} while(respuesta == "s")

	//a-
	if(contadorVacunadosChina > 0)
	{
	promedioEdadChina = acumuladorEdad / contadorVacunadosChina;
	}
	console.log("El promedio de edad de los inoculados con vacuna china es: " + promedioEdadChina);

	//b-
	console.log("Hombre más joven\n-Nombre: " + nombreHombreJoven + "\n-Vacuna: " + vacunaHombreJoven);

	//c-
	if(contadorVacunaAmericana > 0)
	{
	porcentajeMenoresAmericana = (contadorMenores / contadorVacunaAmericana)* 100;
	console.log("Personas con vacuna americana\nEl " + porcentajeMenoresAmericana +  "% son menores");
	}
	else
	{
	console.log("No hay personas con vacuna americana");
	}

	//d-
	if(contadorVacunados > 0)
	{
	porcentajeUnaDosis = (contadorUnaDosis / contadorVacunados)* 100;
	console.log("Del total de vacunados el " + porcentajeUnaDosis + "% tiene una sola dosis");
	}
	else
	console.log("No hay personas vacunadas");

	//e-
	if(contadorAmericana > contadorChina && contadorAmericana > contadorRusa)
	{	
		console.log("La vacuna más inoculada es la Americana");
	}
	else if(contadorChina >= contadorAmericana && contadorChina > contadorRusa)
	{
		console.log("La vacuna más inoculada es la China");		
	}
	else
	{
		console.log("La vacuna más inoculada es la Rusa");
	}

	
}
