
document.getElementById('boton1').onclick = function () {
    document.getElementById("dato").innerHTML = "Soltero";
};

document.getElementById('boton2').onclick = function () {
    document.getElementById("dato").innerHTML = "Part Time";
};

document.getElementById('boton3').onclick = function () {
    document.getElementById("dato").innerHTML = "D4 - vigente 2028";
};

document.getElementById('ocutar_info').addEventListener('click', function() {
    document.getElementById("dato").style.display = 'none';
});