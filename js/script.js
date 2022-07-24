let huevos = false;
let agua = false;
let queso = false;
let galletitas = false;
let carne = false;

alert("\nBienvenido/a a la lista de supermercado, a continuacion ingrese el numero de lista de los productos que vaya añadiendo al carrito, no va a poder retirarse del supermercado hasta que esten todos los productos..");
alert("\nRecuerde abrir la consola del navegador para poder visualizar la lista :)");

do{
    console.log("\nLos productos que faltan son: ");
    
    let orden = 1;
    
    // A continuacion se imprimen los productos de la lista que no estan añadidos al carrito y se muestra por consola su codigo (aquellos que cuentan con valor false)

    if( !huevos ){
        console.log(orden + " - Huevos");
        orden++;
    }
    if( !agua ){
        console.log(orden + " - Agua");
        orden++;
    }
    if( !queso ){
        console.log(orden + " - Queso");
        orden++;
    }
    if( !galletitas ){
        console.log(orden + " - Galletitas");
        orden++;
    }
    if( !carne ){
        console.log(orden + " - Carne");
        orden++;
    }
    
    let producto = prompt("\nIngrese el numero del producto que desee añadir");
    
    // En la primera condicion se analiza si el valor de los productos es true o false, en caso de ser false(no esta añadido), se verifica si coincide con el numero ingresado

    let contador = 1;

    if ( !huevos ) { 
        if( producto == contador ){
            huevos = true;
            continue;
        }
        contador ++;
    }
    if ( !agua ) { 
        if( producto == contador ){
            agua = true;
            continue;
        }
        contador ++;
    }
    if ( !queso ) { 
        if( producto == contador ){
            queso = true;
            continue;
        }
        contador ++;
    }
    if ( !galletitas ) {
        if( producto == contador ){
            galletitas = true;
            continue;
        }
        contador ++;
    }
    if ( !carne & producto == contador ){
        carne = true;
        continue;
    }
    
    alert("\nEl valor ingresado no corresponde a un elemento de la lista del supermercado");

}while( !huevos || !agua || !queso || !galletitas || !carne );

console.log("\nNo quedan mas productos para añadir al carrito");
alert("\nFelicidades, usted ya tiene todos los productos de su compra añadidos, puede ir a la caja a pagar");