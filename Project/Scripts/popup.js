function regExitoso(){
    alert('Registro exitoso');
};

var getData = function(){
    var delgadez = document.getElementById('delgadez');
    var normal = document.getElementById('normal');
    var sobrepeso = document.getElementById('sobrepeso');
    var obesidad = document.getElementById('obesidad');
    var peso = document.getElementById('peso').value;
    var talla = document.getElementById('talla').value;
    var imc = peso / (talla * talla);
    document.getElementById('resultadoImc').innerHTML = "Tu Indice de Masa Corporal es: "+ imc.toFixed(2);
    if(imc < 18.5){
        document.getElementById('delgadez').innerHTML = delgadez;
    }else if(imc >=18.5 && imc < 25){
        document.getElementById('normal').innerHTML = normal;
    }else if(imc >=25 && imc < 30){
        document.getElementById('sobrepeso').innerHTML = sobrepeso;
    }else{
        document.getElementById('obesidad').innerHTML = obesidad;
    }
}

