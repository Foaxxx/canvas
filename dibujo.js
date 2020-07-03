var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoporclick);
var aa = document.getElementById("recarga");
aa.addEventListener("click", mandale);

var d = document.getElementById("dibujito"); // metodo del documeto para traer un elemento por su Id, en este caso, dibujito, que
//corresponde a la etiqueta canvas 
var ancho = d.width;
var lienzo = d.getContext("2d")
//metodo del canvas para generar el contexto

function mandale()
{
    location.reload();
}

function dibujoporclick(parseInt)
{
    

var x = parseInt(texto.value);
var espacio = ancho / x;



var lineas = 30;
var l = 0;
var yi, xf;
var lineas2 = 30;
var l2 = 0;
var yi2, xf2;
var lineas3 = 30;
var l3 = 0;
var xi, yf; 
var lineas4 = 30;
var l4 = 0;
var xi2, yf2; 


while (l < lineas)
{
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("green", 0, yi ,xf, 300);
    console.log("linea " + l);
    l = l + 1;
}
while (l2 < lineas2)
{
    yi2 = espacio * (l2 - 1);
    xf2 = 300 - (l2 * espacio);
    dibujarLinea("red", 299,yi2,xf2,299);
    l2 = l2 + 1;
}

while(l3 < lineas3)
{
    xi = l3 * espacio;
    yf = l3 * espacio;
    dibujarLinea("yellow",xi,0,300,yf);
    l3 = l3 + 1;
}

while(l4 < lineas4)
{
    xi2 = 300 - (l4 * espacio);
    yf2 = espacio * (l4 + 1);
    dibujarLinea("blue", xi2,0,0,yf2);
    l4 = l4 + 1;
    
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();//metodo para comenzar el trazo
    lienzo.strokeStyle = color; //atributo que indica el color de la linea
    lienzo.moveTo(xinicial, yinicial); //metodo inicia trazo
    lienzo.lineTo(xfinal, yfinal); //metodo mueve la linea
    lienzo.stroke(); //dibuja la linea
    lienzo.closePath();//cierra el trazo 
}

dibujarLinea("black", 0,0,0,300);
dibujarLinea("black", 0,300,300,300);
dibujarLinea("black", 0,0,300,0);
dibujarLinea("black", 300,0,300,300);

}
