
document.getElementById('boton1').onclick = function () {
    document.getElementById("dato").innerHTML = "Poseo excelentes habilidades de análisis, planificación y trabajo en equipo que he adquirido durante mis estudios universitarios; las habilidades en planificación estratégica y mis trabajos desempeñados en las distintas empresas me dieron las herramientas necesarias para poder desempeñarme con eficiencia en el mundo laboral actual.";
};

document.getElementById('boton2').onclick = function () {
    document.getElementById("dato").innerHTML = "Soltero";
};

document.getElementById('boton3').onclick = function () {
    document.getElementById("dato").innerHTML = "Part Time / Full Time";
};

document.getElementById('boton4').onclick = function () {
    document.getElementById("dato").innerHTML = "D4 - vigente hasta Junio 2028";
};

document.getElementById('ocultar_info').addEventListener('click', function() {
    document.getElementById("dato").style.display = 'none';
});