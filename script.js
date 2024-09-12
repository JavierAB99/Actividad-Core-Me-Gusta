var botonLinn = document.querySelector("#boton-linn");
var botonLina = document.querySelector("#boton-lina");
var botonMateo = document.querySelector("#boton-mateo");

var likesLinn = document.getElementById("#likes-linn");
var txtLikesLinn = document.querySelector("#likes-linn");

botonLinn.addEventListener("click", function (){
    likesLinn++;
    txtLikesLinn.innerText = likesLinn;
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