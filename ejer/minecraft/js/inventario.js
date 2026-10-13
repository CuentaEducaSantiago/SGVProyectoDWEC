const menu = () => {
    return prompt(
        "Seleccione una opción:\n" +
        "*************************************\n" +
        "1. Mostrar inventario completo\n" +
        "2. Mostrar barra de accesos rápidos\n" +
        "3. Buscar un objeto\n" +
        "4. Añadir un objeto al inventario\n" +
        "5. Mover un objeto\n" +
        "6. Eliminar un objeto\n" +
        "7. Mostrar huecos libres\n" +
        "8. Mostrar el objeto más abundante\n" +
        "*************************************\n" +
        "0. Salir"
    );
};
class Item {
    constructor(nombre, descripcion, cantidad, maxStack) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = Number(cantidad);
        this.maxStack = Number(maxStack);
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(nombre) {
        this.nombre = nombre;
    }
    get quantity() {
        return this.cantidad;
    }
    set quantity(value) {
        this.cantidad = value;
    }
    showinfo() {
        return this.nombre + " " +
            this.descripcion + " " +
            this.cantidad + " " +
            this.maxStack;
    }
}
const ejer1=()=>{
    for (let origen = 0; origen < 4; origen++) {
        for (let origen2 = 0; origen2 < 9; origen2++) {
            if (inventario[origen][origen2] == null) {
                alert(
                    "Fila " + (origen + 1) +
                    " y columna " + (origen2 + 1) +
                    " está vacía"
                );
            } else {
                confirm(
                    "Fila " + (origen + 1) +
                    " y columna " + (origen2 + 1) +
                    " contiene: " +
                    inventario[origen][origen2].showinfo()
                );
            }
        }
    }
}
const ejer2=()=>{
    for (let origen = 0; origen < 1; origen++) {
        for (let origen2 = 0; origen2 < 9; origen2++) {
            if (inventario[origen][origen2] == null) {
                alert(
                    "Acceso rápido " + (origen2 + 1) +
                    ": vacío"
                );
            } else {
                confirm(
                    "Acceso rápido " + (origen2 + 1) +
                    ": " + inventario[origen][origen2].showinfo()
                );
            }
        }
    }
}
const ejer3=()=>{
    let nombre;
    nombre = prompt("Introduce un nombre:");
    var existe = false;
    for (let origen = 0; origen < 4; origen++) {
        for (let origen2 = 0; origen2 < 9; origen2++) {
            if (
                inventario[origen][origen2] != null &&
                inventario[origen][origen2].Nombre === nombre
            ) {
                confirm("Encontrado en la fila " + (origen + 1) + " y columna " + (origen2 + 1) + "\n" + inventario[origen][origen2].showinfo() );
                existe = true;
            }
        }
    }
    if (!existe) {
        alert("Este objeto no existe o no está en tu inventario");
    }
}
const ejer4=()=>{
    let nombre, descripcion, cantidad, maxStack, resp;
    resp=Number(prompt("¿El objeto que va a introducir existe ya en el inventario?(1. Si, 2.No)"))
    switch(resp){
        case 1:
            nombre = prompt("Introduce un nombre:");
            cantidad = Number(prompt("Introduce una cantidad:"));
            var conf = false;
            var exist=false;
            for (let origen = 0; origen < 4 && !exist; origen++) {
                for (let origen2 = 0; origen2 < 9 && !exist; origen2++) {
                    if (
                        inventario[origen][origen2] != null &&
                        inventario[origen][origen2].Nombre === nombre
                    ) {
                        var ob1 = new Item(nombre,inventario[origen][origen2].descripcion,cantidad,inventario[origen][origen2].maxStack);
                        exist=true;
                    }
                }
            }
            
            for (let origen = 0; origen < 4 && !conf; origen++) {
                for (let origen2 = 0; origen2 < 9 && !conf; origen2++) {
                    if (inventario[origen][origen2] != null &&inventario[origen][origen2].Nombre === ob1.Nombre){
                        if (inventario[origen][origen2].cantidad + cantidad <=inventario[origen][origen2].maxStack){
                            inventario[origen][origen2].cantidad += cantidad;
                            confirm("Cantidad del objeto actualizada");
                            conf = true;
                            break;
                        }
                        else{
                            alert(
                                "No cabe toda la cantidad en esta pila. "
                            );
                        }
                    }
                }
            }
            if (!conf) {
                for (let origen = 0; origen < 4 && !conf; origen++) {
                    for (let origen2 = 0; origen2 < 9 && !conf; origen2++) {
                        if (inventario[origen][origen2] == null) {
                            inventario[origen][origen2] = ob1;
                            confirm("Objeto añadido correctamente ");
                            conf = true;
                        }
                    }
                }
            }
            break;
        case 2:
            nombre = prompt("Introduce un nombre:");
            descripcion = prompt("Introduce una descripción:");
            cantidad = Number(prompt("Introduce una cantidad:"));
            maxStack = Number(prompt("Introduce un maxStack:"));
            var conf = false;
            if (nombre === null || descripcion === null || !Number.isInteger(cantidad) || !Number.isInteger(maxStack) || cantidad <= 0 || maxStack <= 0 || cantidad > maxStack) {
                alert("Los datos introducidos no son válidos");
            }
            var ob1 = new Item(nombre, descripcion, cantidad, maxStack);
            for (let origen = 0; origen < 4 && !conf; origen++) {
                for (let origen2 = 0; origen2 < 9 && !conf; origen2++) {
                    if (inventario[origen][origen2] != null &&inventario[origen][origen2].Nombre === ob1.Nombre){
                        if (inventario[origen][origen2].cantidad + ob1.cantidad <=inventario[origen][origen2].maxStack){
                            inventario[origen][origen2].cantidad += ob1.cantidad;
                            confirm("Cantidad del objeto actualizada");
                            conf = true;
                        } else {
                            alert(
                                "No cabe toda la cantidad en esta pila. " +
                                "No se ha añadido el objeto."
                            );
                            conf = true;
                        }
                    }
                }
            }
            if (!conf) {
                for (let origen = 0; origen < 4 && !conf; origen++) {
                    for (let origen2 = 0; origen2 < 9 && !conf; origen2++) {
                        if (inventario[origen][origen2] == null) {
                            inventario[origen][origen2] = ob1;
                            confirm("Objeto añadido correctamente");
                            conf = true;
                        }
                    }
                }
            }
            if (!conf) {
                alert("El objeto no ha sido añadido. El inventario está lleno");
            }
            break;
    }
}
const ejer5=()=>{
    let origen, origen2, destino, destino2;
    origen = Number(prompt("Introduce la fila de origen (1-4):")) - 1;
    origen2 = Number(prompt("Introduce la columna de origen (1-8):")) - 1;
    destino = Number(prompt("Introduce la fila de destino (1-4):")) - 1;
    destino2 = Number(prompt("Introduce la columna de destino (1-8):")) - 1;
    if (
        origen < 0 || origen >= 4 ||
        origen2 < 0 || origen2 >= 8 ||
        destino < 0 || destino >= 4 ||
        destino2 < 0 || destino2 >= 8
    ) {
        alert("La fila o columna no es válida");
    }
    if (inventario[origen][origen2] == null) {
        alert("No hay ningún objeto en la posición de origen");
    }
    if (origen === destino && origen2 === destino2) {
        alert("El origen y el destino son la misma posición");
    }
    if (inventario[destino][destino2] == null) {
        inventario[destino][destino2] = inventario[origen][origen2];
        inventario[origen][origen2] = null;
        alert("Objeto movido correctamente");
    } else if (inventario[origen][origen2].Nombre===inventario[destino][destino2].Nombre) {
        cant=inventario[origen][origen2].cantidad +inventario[destino][destino2].cantidad;
        if (cant <= inventario[destino][destino2].maxStack) {
            inventario[destino][destino2].cantidad = cant;
            inventario[origen][origen2] = null;
            confirm("Objetos agrupados correctamente");
        } else {
            cant2=cant - inventario[destino][destino2].maxStack;
            inventario[destino][destino2].cantidad=inventario[destino][destino2].maxStack;
            inventario[origen][origen2].cantidad=cant2;
            alert("Se ha llenado la pila de destino");
        }
    } else {
        var ob1 = inventario[origen][origen2];
        inventario[origen][origen2] = inventario[destino][destino2];
        inventario[destino][destino2] = ob1;
        confirm("Objetos intercambiados correctamente");
    }
}
const ejer6=()=>{
    let origen = Number(prompt("Introduce la fila de origen (1-4):")) - 1;
    let origen2 = Number(prompt("Introduce la columna de origen (1-8):")) - 1;
    if (
        origen < 0 || origen >= 4 ||
        origen2 < 0 || origen2 >= 8
    ) {
        alert("La fila o columna no es válida");
        return null;
    }
    if (inventario[origen][origen2] == null) {
        alert("Esta posición ya está vacía");
    } else {
        resp = prompt(
            "¿Quieres eliminar " +
            inventario[origen][origen2].Nombre +
            "?\origen. Sí\origen2. No"
        );
        if (resp === "1") {
            inventario[origen][origen2] = null;
            alert("Objeto eliminado correctamente");
        }
    }
}
const ejer7=()=>{
    let cant = 0;
    for (let origen = 0; origen < 4; origen++) {
        for (let origen2 = 0; origen2 < 9; origen2++) {
            if (inventario[origen][origen2] == null) {
                cant++;
            }
        }
    }
    confirm("Huecos libres: " + cant + " de 36");
}
const ejer8=()=>{
    var existe = false;
    let cant = 0;
    let nombre = "";
    for (let origen = 0; origen < 4; origen++) {
        for (let origen2 = 0; origen2 < 9; origen2++) {
            if (inventario[origen][origen2] != null) {
                if (inventario[origen][origen2].Nombre == nombre) {
                    cant+=inventario[origen][origen2].cantidad;
                }
                else{
                    if (inventario[origen][origen2].cantidad > cant) {
                        cant = inventario[origen][origen2].cantidad;
                        nombre = inventario[origen][origen2].Nombre;
                        existe = true;
                    }
                }
            }
        }
    }
    if (existe) {
        confirm("Objeto más abundante: " + nombre +"\nCantidad: " + cant);
    } else {
        alert("El inventario está vacío");
    }
}
var inventario = new Array(4);
for (let origen = 0; origen < 4; origen++) {
    inventario[origen] = new Array(8).fill(null);
}
let opt = 5;
do {
    opt = Number(menu());
    switch (opt) {
        case 1:
            ejer1();
            break;
        case 2:
            ejer2();
            break;
        case 3:
            ejer3();
            break;
        case 4:
            ejer4();
            break;
        case 5:
            ejer5();
            break;
        case 6:
            ejer6();
            break;
        case 7:
            ejer7();
            break;
        case 8:
            ejer8();
            break;
        case 0:
            alert("Adiós");
            break;
        default:
            alert("Opción no válida");
            break;
    }
} while (opt !== 0);