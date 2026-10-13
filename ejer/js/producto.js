class producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        if (precio >= 0) {
            this.precio = precio;
        }
        this.stock = stock;
    }
    showinfo(){
        return (this.nombre, " ", this.precio, " ", this.stock);
    }
    totalstock(){
        return (this.stock*this.precio);
    }
    getnombre(){
        return this.nombre;
    }
    setnombre(n){
        this.nombre=n;
    }
    getprecio(){
        return this.precio;
    }
    setprecio(propiedad_precio){
        if (propiedad_precio >= 0) {
            this.precio = propiedad_precio;
        }
    }
    getstock(){
        return this.stock;
    }
    setstock(t){
        this.stock=t;
    }
} 

let teclado= new producto("Teclado", 29.99, 15)

let raton= new producto("Raton", 14.50, 30)

let arr = new Array(5).fill(0);

console.log(teclado.nombre," por ",teclado.precio)

console.log(raton.nombre," por ",raton.precio)

console.log("Stock de todos los productos: ",(raton.stock+teclado.stock))

console.log(raton.showinfo)

console.log(raton.totalstock)

for(var x=0;x<5;x++){
    var nombre= prompt("introduce un nombre");
    var precio= prompt("introduce un nombre");
    var stock= prompt("introduce un nombre");
    arr[x]= new producto(nombre, precio, stock)
}

for(var x=0;x<5;x++){
    prompt(arr[x].showinfo);
}

for(var x=0;x<5;x++){
    prompt(arr[x].getNombre, "media: ", (arr[x].getprecio/2));
}

let mayor=0;

for(let x=0;x<5;x++){
    if(arr[x]>arr[mayor]){
        mayor=x;
    }
}

prompt(arr[mayor])

for(let x=0;x<5;x++){
    arr[x].setprecio(arr[x].getprecio+((arr[x].getprecio*10)/100));
}

for(let x=0;x<5;x++){
    prompt(arr[x].showinfo);
}