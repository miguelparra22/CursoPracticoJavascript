// Código del cuadrado

console.group("Cudrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es: " + perimetroCuadrado );

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.groupEnd();
//Código del triangulo

console.group("triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const base = 4;
const altura = 5.5;

console.log(
    "Los lados del triangulo miden: "
+ ladoTriangulo1 
+ " cm,"
+ ladoTriangulo2 
+ " cm, "
+ base 
+ " cm "
)

console.log("La altura del triangulo es de:"+ altura);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + base;
console.log("El perimetro del triangulo es:" +  perimetroTriangulo );

const areaTriangulo = ( base*altura ) / 2;

console.log("El area del triangulo es: " + areaTriangulo);



// Código del circulo 

console.group("Circulos");
// radio
const radio = 4;
console.log("El radio del circulo es: " + radio)
// diametro
const diametroCirculo = radio*2;


console.log("el diametro del cirulo es:" +diametroCirculo)

//Pi

const pi = Math.PI;

console.log("Pi es:" +pi)

//Circunferencias

const perimentro = diametroCirculo * pi;

console.log("El perimetro del circulo es: " + perimentro)

//Area

const areaCirculo = (radio*radio)*pi;


console.log("El area del circulo es:" + areaCirculo)


console.groupEnd();



console.groupEnd();
