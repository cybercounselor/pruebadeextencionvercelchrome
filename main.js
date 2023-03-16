//// Obtener los elementos necesarios del DOM usando el método querySelector

const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');
// Agregar un evento "click" al botón "Agregar"
addBtn.addEventListener('click', (a)=>{
// Prevenir que la página se recargue cuando se hace clic en el botón
a.preventDefault();
// Obtener el texto ingresado en el input
const text = input.value;

//ahora vemos si el input viene vacio
if (text !==""){
//si es distinto de vacio, crea un li y un p
const li = document.createElement ('li');
const p = document.createElement ('p');
//ahora que ya cree un li y un p, le cargo el valor
p.textContent = text;
//ahora agrego este p al li y el li al ul
li.appendChild(p);
ul.appendChild(li);
//ahora agrego al li el boton de opcion de borrado,addDeleteBtn crea un boton, que se hace en una funcion que hago mas abajo asi que aca solo la llamo
li.appendChild(addDeleteBtn());
 // Borrar el contenido del input
input.value = "";
// Ocultar el mensaje de "No tienes tareas pendientes" si hay tareas en la lista
empty.style.display = 'none';

}
});
// Función para crear el botón "Eliminar"
function addDeleteBtn () {
  const deleteBtn = document.createElement('button');
 // Agregar la letra "x" como texto del botón "Eliminar"

  deleteBtn.textContent = "x";
  //ahora le pongo una clase al boton, esto crea EL NOMBRE DE LA CLASE NO LA CLASE luego le doy el estilo en el css como a cualquier otra clase
  deleteBtn.className = "btn-delete";
  // Agregar un evento "click" al botón "Eliminar"
deleteBtn.addEventListener("click", (e)=>{
 // Obtener el elemento "li" que contiene el botón "Eliminar" que se hizo clic
  const item = e.target.parentElement;
// Eliminar el elemento "li" de la lista desordenada
  ul.removeChild(item);
 
// Verificar si hay elementos Li en la lista desordenada
  const items = document.querySelectorAll("li");
  //ahora un if para recorrer los items y ver si un item es =0 entonces me muestra el texto de empety
  if (items.length === 0){
    empty.style.display = "block";
  }

})
// Vuelve a poner el botón "Eliminar"
return deleteBtn;

};

