// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// nombres de los amigos

const listaAmigos = [] ;

const ulListaAmigos = document.getElementById( "listaAmigos" )

const inputAmigo = document.getElementById( "amigo" );

const ulResultado = document.getElementById("resultado")


//funciones

function agregarAmigo(){ 
    
    // Guardar y que aparezcan los nombres debajo
    listaAmigos.push(inputAmigo.value) ;

    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`


     if (inputAmigo.value == ""){
        alert ("Por favor, pon un nombre ")
    } 
    

} ;



function sortearAmigo() {

   //configura que existen varios nombres para escoger
   const random = Math.floor((Math.random() * listaAmigos.length)) ;

   const amigoSecreto = listaAmigos[random]

   ulResultado.innerHTML = `<li>El amigo/a secreto es: ${amigoSecreto}</li>`
 

}





