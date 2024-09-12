var botonLinn = document.querySelector("#boton-linn");
var botonLina = document.querySelector("#boton-lina"); //Selectores de botones de like
var botonMateo = document.querySelector("#boton-mateo");

var likesLinn = document.getElementById("#likes-linn"); //Para conseguir el valor numerico del texto de cantidad de likes
var txtLikesLinn = document.querySelector("#likes-linn"); //Selector para el texto de likes que sera modificado

botonLinn.addEventListener("click", function (){ //Funcion onclick para el boton de likes de Linn y mas adelante de los otros usuarios
    likesLinn++; //Aumenta cantidad en 1
    txtLikesLinn.innerText = likesLinn; //Se cambia el texto por el nuevo valor
});

var likesLina = document.getElementById("#likes-lina");
var txtLikesLina = document.querySelector("#likes-lina");

botonLina.addEventListener("click", function (){
    likesLina++;
    txtLikesLina.innerText = likesLina;
});

var likesMateo = document.getElementById("#likes-mateo");
var txtLikesMateo = document.querySelector("#likes-mateo");

botonMateo.addEventListener("click", function (){
    likesMateo++;
    txtLikesMateo.innerText = likesMateo;
});