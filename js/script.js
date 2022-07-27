// Variables utilizadas en el programa

let usuario = "admin";
let contraseña = "contraseña";
let validacion = false;

// Funciones utilizadas en el programa

function ingresar(usuarioIngresado, contraseñaIngresada){
    
    if( usuarioIngresado == usuario ){
        if( contraseñaIngresada == contraseña ){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }

}
function pedirUsuario(){
    return prompt("Ingresar nombre de usuario");
}

function pedirContraseña(){
    return prompt("Ingresar contraseña");
}

// Inicio del programa

alert("Bienvenido al inicio de la pagina, por favor seleccione una opcion:");

do{

    let opcion = prompt("\n1 - Ingresar con usuario ya existente. \n2 - Crear una cuenta. \n3 - Olvide mi contraseña.");

    switch ( opcion ) {
        case "1" : 
            validacion = ingresar( pedirUsuario(), pedirContraseña() );
            if( !validacion ){
                alert("No ingresó los datos de su cuenta correctamente");
            }
            break;

        case "2" :
            alert("A continuacion crear su usuario");
            usuario = pedirUsuario();
            alert("A continuacion crear su contraseña");
            contraseña = pedirContraseña();
            alert("Usted se ha creado la cuenta con exito");
            validacion = true;
            break;

        case "3" :
            let usuarioEntrada = pedirUsuario();
            if ( usuarioEntrada == usuario ){
                //Modificar contraseña e ingresar con el usuario
                alert("A continuacion va a modificar su contraseña:");
                contraseña = pedirContraseña();
                alert("Por favor ingrese a su cuenta con la nueva contraseña");
                validacion = ingresar( pedirUsuario(), pedirContraseña() );
                if( !validacion ){
                    alert("No ingresó los datos de su cuenta correctamente");
                }
            }
            else{
                alert("Su nombre de usuario no existe, intente nuevamente..");
            }
            break;

        default:
            alert("El valor ingresado no corresponde a una de las opciones");
            break;
    }

}while( !validacion );

alert("Felicidades, usted ha podido ingresar, ya puede navegar por la aplicacion web :)");
