const radiologiadom = document.getElementById("radiologia")
const traumatologiadom = document.getElementById("traumatologia")
const dentaldom = document.getElementById("dental")

const radioUltima = document.getElementById('radio-ultima')
const traumaUltima = document.getElementById('trauma-ultima')
const dentalUltima = document.getElementById('dental-ultima')

const tablaRadio = document.getElementById("t-radio")
const tablaTrauma = document.getElementById("t-trauma")
const tablaDental = document.getElementById("t-dental")
const tablaPacientes = document.getElementById("t-pacientes")
const tablaDentalIsapre = document.getElementById("t-dentalIsapre")
const tablaTraumaFonasa = document.getElementById("t-traumaFonasa")


radiologiadom.innerHTML = "<strong>Primera Atención: </strong>" + radiologia[0].paciente.nombre + " - " + radiologia[0].paciente.prevision
radioUltima.innerHTML = "<strong>Última Atención: </strong>" + radiologia[radiologia.length - 1].paciente.nombre + " - " + radiologia[radiologia.length - 1].paciente.prevision

traumatologiadom.innerHTML = "<strong>Primera Atención: </strong>" + traumatologia[0].paciente.nombre + " - " + traumatologia[0].paciente.prevision
traumaUltima.innerHTML = "<strong>Última Atención: </strong>" + traumatologia[traumatologia.length - 1].paciente.nombre + " - " + traumatologia[traumatologia.length - 1].paciente.prevision

dentaldom.innerHTML = "<strong>Primera Atención: </strong>" + dental[0].paciente.nombre + " - " + dental[0].paciente.prevision
dentalUltima.innerHTML = "<strong>Última Atención: </strong>" + dental[dental.length - 1].paciente.nombre + " - " + dental[dental.length - 1].paciente.prevision

function encabezado() {
    let headers = '<tr class="table-primary"><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>';
    return headers;
}

function dibujaTabla(tabla, especialidad) {
    tabla.innerHTML = encabezado()
    let contenido = ''
    especialidad.forEach(function (agenda) {
        contenido = contenido + '<tr><td>' + agenda.hora + '</td><td>' + agenda.especialista + '</td><td>'
            + agenda.paciente.nombre + '</td><td>' + agenda.paciente.rut + '</td><td>' + agenda.paciente.prevision + '</td></tr>';
    });
    tabla.innerHTML = tabla.innerHTML + contenido;
}

function arrayNombres(arreglo) {
    let resultado = [];
    arreglo.forEach(function (registro) {
        resultado.push(registro.paciente.nombre)
    })
    return resultado;
}

function totalPacientes() {
    let contenidoTabla = tablaPacientes.innerHTML;
    let arrayPacientes = [];
    arrayPacientes = arrayNombres(radiologia);
    arrayPacientes = arrayPacientes.concat(arrayNombres(traumaActualizado));
    arrayPacientes = arrayPacientes.concat(arrayNombres(dental));

    arrayPacientes.forEach(function (nombre) {
        contenidoTabla = contenidoTabla + "<tr> <td>" + nombre + "</td> </tr>"

    })
    tablaPacientes.innerHTML = contenidoTabla;
}
function filtrarDentalIsapre () {
    let nombres =tablaDentalIsapre.innerHTML;
    let filtrados = dental.filter(function (registro) {
        return registro.paciente.prevision == "Isapre"
    }) 
    
    filtrados.forEach(function (registro) {
        nombres = nombres + "<tr> <td>" + registro.paciente.nombre +  "</td> </tr>"
 
    })
    tablaDentalIsapre.innerHTML=nombres
}
function filtrarTraumaFonasa () {
    let nombres =tablaTraumaFonasa.innerHTML;
    let filtrados = traumaActualizado.filter(function (registro) {
        return registro.paciente.prevision == "Fonasa"
    }) 
    
    filtrados.forEach(function (registro) {
        nombres = nombres + "<tr> <td>" + registro.paciente.nombre +  "</td> </tr>"
 
    })
    tablaTraumaFonasa.innerHTML=nombres
}


var traumaActualizado = traumatologia.concat(nuevoTrauma);
traumaActualizado.sort(function (a, b) {
    if (a.hora > b.hora) {
        return 1;
    }
    if (a.hora < b.hora) {
        return -1;
    }

    return 0;


});



//Eliminar el primer y último elemento de Radiología

//elimina primer elemento
radiologia.shift();
//console.log(radiologia);

//elimina último elemento
radiologia.pop();
//console.log(radiologia);

dibujaTabla(tablaRadio, radiologia);
dibujaTabla(tablaTrauma, traumaActualizado);
dibujaTabla(tablaDental, dental);

totalPacientes();
filtrarDentalIsapre();
filtrarTraumaFonasa();