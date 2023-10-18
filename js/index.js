var inpBinario = document.getElementById('inpBinario');
var resultado = document.getElementById('resultado');

inpBinario.addEventListener('keypress', function(event){

    var binario = inpBinario.value;

    if(event.key === 'Enter' && binario !== ''){

        resultado.innerHTML = '';

        if(/^[01]{1,8}$/.test(binario)){

            var resultadoDecimal = 0;

            var digitosBinarios = binario.split('').reverse();

            for(var i = 0; i < binario.length; i++){

                if(binario[i] === '1'){
                    resultadoDecimal += Math.pow(2, binario.length - 1 - i);
                }

            }

            resultado.innerHTML = `O equivalente decimal é: ${resultadoDecimal}`

        }else if(binario.length > 8){
    
            resultado.innerHTML = 'Você inseriu mais de 8 dígitos!';
    
        }

    }else if(binario === ''){

        resultado.innerHTML = 'Por favor digite algum número até 8 digitos binários válidos.';

    }

});