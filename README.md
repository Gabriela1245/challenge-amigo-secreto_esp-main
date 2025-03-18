# Juego del Amigo Secreto-Alura

- En este README se explicará detalladamente sobre el proceso de configuración JavaScript para que la página HTML funcione en poner nombres, avise si no se puso un nombre, sortear y elegir un nombre de todos los participantes añadidos previamente

## README.md




## Objetivos:
Para el sorteo o selección de nombres:
* Seleccionar los nombres uno a la vez, hasta el último en forma aleatoria.
* Los nombres selecionados en el sorteo,  se incluye también cuando no sale ningún nombre y por ello se debe hacer click de nuevo en sortear.

## Catracterísticas:

* El juego permite poner cualquier nombre, pueden ser completos o solo el primer nombre. 
* No diferencia entre mayúsculas y minúsculas. 
* Pueden incluirse caracteres especiales y números.
* Los valores ingresados se muestran en una lista en pantalla en el orden en que se ingresaron.
* No se permite que el nombre esté vacio..
* Luego de iniciado el sorteo, no podrán incluirse más nombres. 
* Al seleccionar el último nombre, la lista de nombres ingresados permanecerá vacía y la lista de nombres seleccionados mostrará los nombres en el orden cronológico de su selección.
* Los archivos fueron provistos por Alura Latam y solo fue modificado el archivo Index.html, para añadir la llamada a las funciones agregarAmigo() y sortearAmigo() mediante el evento onclick, en los botones Añadir y Sortear amigo respectivamente.
* El archivo app.js posee todas las declaraciones de variables, constantes y funciones necesarias para la ejecución del juego.

## Funciones:

  
* agregarAmigo()
  * Se ejecuta al presionar el botón "Añadir".
  * Incluye el nombre registrado en el INPUT en el arreglo "amigos" y en la lista "listaAmigos". 
  * Al hacer click en el botón agregarAmiga el nombre ingresado aparecerá abajo con los demás nombres si fueron previamente agregados también
 * Si no se pone ningún nombre aparecerá una notificación que indicará que debe poner un nombre.
 

* sortearAmigo()
  * Se ejecuta al presionar el botón "sortear".
  * Realiza el sorteo del amigo, en base a la lista de nombres registrados en "listaAmigos".
  * Valida que existan registrados por lo menos dos nombres.
  * Sí el proceso de sorteo inició, se coloca la variable "registarAmigo" en 0 para que no se puedan agragar más nombres a la lista.
  

## Constantes:
   * ulListaAmigos
     * Almacena el elemento HTML de la lista no ordenada "listaAmigos"
   * ulResultado
     * Almacena el elemento HTML de la lista no ordenada "resultado"
   * inputAmigo
     * Almacena el elemento HTML del botón "sortear"
   * elemento 
     * Almacena elemento HTML del siguiente "li" para la inclusión de nombres en la lista "listaAmigos"  
   * elementoR
     * Almacena elemento HTML del siguiente "li" para la inclusión de nombres en la lista "resultado"

## Variables y su valor de inicio
   * listaAmigos = []
     * Almacena los nombres incluídos en el juego para el sorteo. 
  
   * elementoAleatorio = 0
     * Almacena el valor proveniente de Math.floor((Math.random() * listaAmigos.length)) que genera el valor aleatorio entre 0 y n-1 nombres, incluidos para el sorteo. 

## Video de youtube sobre muestra del juego
 * Link: https://youtu.be/aDayNFE4_fw

###Fin
