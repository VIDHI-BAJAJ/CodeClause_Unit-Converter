
var input = document.getElementById('input'),
    result = document.getElementById('result'),
    inputType = document.getElementById('inputType'),
    resultType = document.getElementById('resultType'),
    inputTypeValue , resultTypeValue;

input.addEventListener('keyup' , myResult)
inputType.addEventListener('change' , myResult)
resultType.addEventListener('change' , myResult)

inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult(){
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value

    if(inputTypeValue === 'kilogram' && resultTypeValue === 'gram'){
        result.value = Number(input.value) * 1000
    } else if(inputTypeValue === 'kilogram' && resultTypeValue === 'milligram'){
        result.value = Number(input.value) * 1000000
    }else if(inputTypeValue === 'kilogram' && resultTypeValue === 'pound'){
        result.value = Number(input.value) * 2.20462262185
    }  else if(inputTypeValue === 'kilogram' && resultTypeValue === 'tonne'){
        result.value = Number(input.value) *  0.001 
    }else if(inputTypeValue === 'kilogram' && resultTypeValue === 'kilogram'){
        result.value = input.value
    }
    if(inputTypeValue === 'gram' && resultTypeValue === 'kilogram'){
        result.value = Number(input.value) *  0.001 
    } else if(inputTypeValue === 'gram' && resultTypeValue === 'milligram'){
        result.value = Number(input.value) * 1000
    }else if(inputTypeValue === 'gram' && resultTypeValue === 'pound'){
        result.value = Number(input.value) * 0.00220462262185
    }  else if(inputTypeValue === 'gram' && resultTypeValue === 'tonne'){
        result.value = Number(input.value) *  0.000001
    }else if(inputTypeValue === 'gram' && resultTypeValue === 'gram'){
        result.value = input.value
    }
    if(inputTypeValue === 'tonne' && resultTypeValue === 'kilogram'){
        result.value = Number(input.value) * 1000 
    } else if(inputTypeValue === 'tonne' && resultTypeValue === 'gram'){
        result.value = Number(input.value) *  1000000 
    }else if(inputTypeValue === 'tonne' && resultTypeValue === 'milligram'){
        result.value = Number(input.value) * 1000000000 
    }  else if(inputTypeValue === 'tonne' && resultTypeValue === 'pound'){
        result.value = Number(input.value) * 2204.62262185 
    }else if(inputTypeValue === 'tonne' && resultTypeValue === 'tonne'){
        result.value = input.value
    }
}