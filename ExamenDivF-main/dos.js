/*
El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa menos encontrada
d- Edad del menor argentino contagiado
e- Cantidad de personas extranjeras contagiadas con la delta

*/
function mostrar()
{
let
    nacionalidad,
    resultado,
    edad,
    cepa,

    //a-
    contadorPositivos=0,
    porcentajePositivos=0,

    //b-
    contadorNegativos=0,
    porcentajeNegativos=0,

    //c-
    contadorAlfa=0,
    contadorDelta=0,
    contadorBeta=0,

    //d-
    edadMenorArgentino,
    flagD=1,

    //e-
    contadorPersonasDelta=0;



    for (let i=0;i<8;i++)
    {
        nacionalidad = prompt("Ingrese nacionalidad: ").toLowerCase();
        while(nacionalidad != "argentina" && nacionalidad != "extranjero")
        {
            nacionalidad = prompt("ERROR\nSólo puede ingresar Argentina o extranjero\nIngrese nacionalidad: ").toLowerCase();            
        }

        resultado = prompt("Ingrese resultado: ").toLowerCase();
        while(resultado != "positivo" && resultado != "negativo")
        {
            resultado = prompt("ERROR\nSólo puede ingresar positivo o negativo: ").toLowerCase();            
        }

        edad = parseInt(prompt("Ingrese edad: "));
        while(edad < 18 || edad > 65)
        {
            edad = parseInt(prompt("ERROR\nSólo puede ingresar entre 18 y 65: "));          
        }
        cepa = prompt("Ingrese cepa: ").toLowerCase();

        if (resultado != "negativo")
        {          
        while(cepa == "ninguna")
        cepa = prompt("ERROR\nSólo puede ingresar 'ninguna' si es negativo el resultado\nIntente otra vez: ").toLowerCase();    

        }        
        while(cepa != "delta" && cepa != "alfa" && cepa != "ninguna" && cepa != "beta")
        {
            cepa = prompt("ERROR\nSólo puede ingresar delta, alfa, beta o ninguna: ").toLowerCase();            
        }

        //c-
        if(resultado == "positivo")
        {
            contadorPositivos++;
        }

        if(cepa=="alfa")
        {
            contadorAlfa++;
        }
        else if(cepa=="beta")
        {
            contadorBeta++;
        }
        else
        {
            contadorDelta++;
        }

        //d-
        if (flagD || (edad < edadMenorArgentino && nacionalidad == "argentina" && resultado == "positivo"))
        {
            edadMenorArgentino = edad;
            flagD = 0;
        }
    
        //e-
        if(nacionalidad == "extranjero" && resultado == "positivo" && cepa == "delta") 
        {
            contadorPersonasDelta++;
        }




    }//fin bucle


    //a-
    if(contadorPositivos > 0)
    {
    porcentajePositivos = (contadorPositivos / 8)*100;    
    }
    console.log("El porcentaje de positivos es del " + porcentajePositivos + "%");

    //b-
    if(contadorNegativos > 0)
    {
    porcentajeNegativos = (contadorNegativos / 8)*100;    
    }
    console.log("El porcentaje de negativos es del " + porcentajeNegativos + "%");

    //c-
    if(contadorAlfa < contadorBeta && contadorAlfa < contadorDelta)
    {
        console.log("la cepa menos encontrada es la Alfa");
    }
    else if (contadorBeta <= contadorAlfa && contadorBeta < contadorDelta)
    {
        console.log("la cepa menos encontrada es la Beta");
        
    }
    else
    {
        console.log("la cepa menos encontrada es la Delta");  
        
    }

    //d-
    console.log ("La edad del menor argentino contagiado es: " + edadMenorArgentino);

    //e-
    console.log("La cantidad de extranjeros contagiados con Delta es: " + contadorPersonasDelta);



}
