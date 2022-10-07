const radioPrimera = document.getElementById("radiologia")
const traumaPrimera = document.getElementById("traumatologia")
const dentalPrimera = document.getElementById("dental")

const radioUltima = document.getElementById('radio-ultima')
const traumaUltima = document.getElementById('trauma-ultima')
const dentalUltima = document.getElementById('dental-ultima')

const tablaRadio = document.getElementById("t-radio")
const tablaTrauma = document.getElementById("t-trauma")
const tablaDental = document.getElementById("t-dental")
const tablaPacientes = document.getElementById("t-pacientes")
const tablaDentalIsapre = document.getElementById("t-dentalIsapre")
const tablaTraumaFonasa = document.getElementById("t-traumaFonasa")

let traumaActualizado = []  // Array que contendrá la actualización solicitada



// Modifica el DOM para entregar primera y última atención por especialidad
function primeraYUltima() {
    radioPrimera.innerHTML = "<strong>Primera Atención: </strong>" + radiologia[0].paciente.nombre + " - " + radiologia[0].paciente.prevision
    radioUltima.innerHTML = "<strong>Última Atención: </strong>" + radiologia[radiologia.length - 1].paciente.nombre + " - " + radiologia[radiologia.length - 1].paciente.prevision
    
    traumaPrimera.innerHTML = "<strong>Primera Atención: </strong>" + traumatologia[0].paciente.nombre + " - " + traumatologia[0].paciente.prevision
    traumaUltima.innerHTML = "<strong>Última Atención: </strong>" + traumatologia[traumatologia.length - 1].paciente.nombre + " - " + traumatologia[traumatologia.length - 1].paciente.prevision
    
    dentalPrimera.innerHTML = "<strong>Primera Atención: </strong>" + dental[0].paciente.nombre + " - " + dental[0].paciente.prevision
    dentalUltima.innerHTML = "<strong>Última Atención: </strong>" + dental[dental.length - 1].paciente.nombre + " - " + dental[dental.length - 1].paciente.prevision
   
}

// Devuelve los encabezados para cada tabla de agenda por especialidad
function encabezado() {
    let headers = '<tr class="table-primary"><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr>';
    return headers;
}

// Dibuja tabla con agenda por cada especialidad
function dibujaTabla(tabla, especialidad) {
    tabla.innerHTML = encabezado()
    let contenido = ''
    especialidad.forEach(function (agenda) {
        contenido = contenido + '<tr><td>' + agenda.hora + '</td><td>' + agenda.especialista + '</td><td>'
            + agenda.paciente.nombre + '</td><td>' + agenda.paciente.rut + '</td><td>' + agenda.paciente.prevision + '</td></tr>';
    });
    tabla.innerHTML = tabla.innerHTML + contenido;
}

// Recupera el campo NOMBRE del argumento ARREGLO
function arrayNombres(arreglo) {
    let resultado = [];
    arreglo.forEach(function (registro) {
        resultado.push(registro.paciente.nombre)
    })
    return resultado;
}

// Dibuja tabla con los nombres de los pacientes de todas las especialidades
// y los ordena alfabéticamente
function totalPacientes() {
    let contenidoTabla = tablaPacientes.innerHTML;
    let arrayPacientes = [];
    arrayPacientes = arrayNombres(radiologia);
    arrayPacientes = arrayPacientes.concat(arrayNombres(traumaActualizado));
    arrayPacientes = arrayPacientes.concat(arrayNombres(dental));
    arrayPacientes.sort();

    arrayPacientes.forEach(function (nombre) {
        contenidoTabla = contenidoTabla + "<tr> <td>" + nombre + "</td> </tr>"

    })
    tablaPacientes.innerHTML = contenidoTabla;
}

// Filtra pacientes dentales que tienen Isapre
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

// Filtra pacientes de traumatología que tienen Fonasa
function filtrarTraumaFonasa () {
    let nombres = tablaTraumaFonasa.innerHTML;
    let filtrados = traumaActualizado.filter(function (registro) {
        return registro.paciente.prevision == "Fonasa"
    }) 
    
    filtrados.forEach(function (registro) {
        nombres = nombres + "<tr> <td>" + registro.paciente.nombre +  "</td> </tr>"
 
    })
    tablaTraumaFonasa.innerHTML = nombres
}

// Actualiza la tabla de Traumatología y la ordena por el campo HORA
function actualizarTraumatologia() {
    traumaActualizado = traumatologia.concat(nuevoTrauma);
    traumaActualizado.sort(function (a, b) {
        if (a.hora > b.hora) {
            return 1;
        }
        if (a.hora < b.hora) {
            return -1;
        }
        return 0;
    });
}




actualizarTraumatologia();

// Eliminar el primer y último elemento de Radiología
// --------------------------------------------------
radiologia.shift();  //elimina primer elemento
radiologia.pop();   //elimina último elemento

primeraYUltima();

dibujaTabla(tablaRadio, radiologia);
dibujaTabla(tablaTrauma, traumaActualizado);
dibujaTabla(tablaDental, dental);

totalPacientes();
filtrarDentalIsapre();
filtrarTraumaFonasa();