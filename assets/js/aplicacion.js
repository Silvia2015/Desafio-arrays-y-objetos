const radiologiadom= document.getElementById ("radiologia")
const traumatologiadom= document.getElementById ("traumatologia")
const dentaldom= document.getElementById ("dental")
const tablaRadio = document.getElementById("t-radio")
const tablaTrauma = document.getElementById("t-trauma")
const tablaDental = document.getElementById("t-dental")

radiologiadom.innerText= "Primera Atención: "+ radiologia[0].paciente.nombre + " - "+ radiologia[0].paciente.prevision
    +" | "+"Última Atención: "+ radiologia[radiologia.length-1].paciente.nombre + " - "+ radiologia[radiologia.length-1].paciente.prevision 

traumatologiadom.innerText= "Primera Atención: "+ traumatologia[0].paciente.nombre + " - "+ traumatologia[0].paciente.prevision
    +" | "+"Última Atención: "+ traumatologia[traumatologia.length-1].paciente.nombre + " - "+ traumatologia[traumatologia.length-1].paciente.prevision 

dentaldom.innerText= "Primera Atención: "+ dental[0].paciente.nombre + " - "+ dental[0].paciente.prevision
    +" | "+"Última Atención: "+ dental[dental.length-1].paciente.nombre + " - "+ dental[dental.length-1].paciente.prevision 

function encabezado () {
    let headers = '<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>';
    return headers;
}

function dibujaTabla (tabla, especialidad) {
    tabla.innerHTML = encabezado()
    let contenido = ''
    especialidad.forEach(function(agenda) {
        contenido = contenido + '<tr><td>'+agenda.hora+'</td><td>'+agenda.especialista+'</td><td>'
            +agenda.paciente.nombre+'</td><td>'+agenda.paciente.rut+'</td><td>'+agenda.paciente.prevision+'</td></tr>';
    });
    tabla.innerHTML = tabla.innerHTML + contenido;
}

dibujaTabla(tablaRadio, radiologia);
dibujaTabla(tablaTrauma, traumatologia);
dibujaTabla(tablaDental, dental);


