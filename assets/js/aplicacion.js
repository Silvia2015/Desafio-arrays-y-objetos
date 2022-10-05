const radiologiadom= document.getElementById ("radiologia")
const traumatologiadom= document.getElementById ("traumatologia")
const dentaldom= document.getElementById ("dental")
radiologiadom.innerText= "Primera Atención: "+ radiologia[0].paciente.nombre + " - "+ radiologia[0].paciente.prevision
    +" | "+"Última Atención: "+ radiologia[radiologia.length-1].paciente.nombre + " - "+ radiologia[radiologia.length-1].paciente.prevision 

traumatologiadom.innerText= "Primera Atención: "+ traumatologia[0].paciente.nombre + " - "+ traumatologia[0].paciente.prevision
    +" | "+"Última Atención: "+ traumatologia[traumatologia.length-1].paciente.nombre + " - "+ traumatologia[traumatologia.length-1].paciente.prevision 

dentaldom.innerText= "Primera Atención: "+ dental[0].paciente.nombre + " - "+ dental[0].paciente.prevision
    +" | "+"Última Atención: "+ dental[dental.length-1].paciente.nombre + " - "+ dental[dental.length-1].paciente.prevision 

function encabezado () {
    
}


