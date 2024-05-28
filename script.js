//Referencias
const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTarea = document.getElementById('lista-de-tareas');

function agregarTarea(){
    if(input.value) {
        //Crear Tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        //Texto ingresado por el usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        //Crearemos y agregaremos contenedor de iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        //Iconos
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);

        //Segundo icono
        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);

        iconos.append(completar, eliminar);

        //Para poder agregar una tarea a la lista
        listaDeTarea.appendChild(tareaNueva);
    } else{
        alert("Por favor ingresa una tarea");
    }
}

//Definir dos funciones mas
//Toma como parametro un evento
function completarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    //permite aternar una clase "toggle"
    tarea.classList.toggle('completada');
}

function eliminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}


boton.addEventListener('click', agregarTarea);
//Evento para hacer una tarea cuando demos enter
input.addEventListener('keydown', (e) => {
 if(e.key === 'Enter') {
    agregarTarea();
 }
});
