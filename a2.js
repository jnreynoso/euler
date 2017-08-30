import raw_input from './raw_input'

function fibonacci(a, b, evenNumber, limite){

  // 1,2,3,5,8,13,21

  if(a == 0){
    console.log('2')
    fibonacci(3, 2, 2, limite)
  }else{
    if(a+b > limite){
      console.log('Suma de pares : ' + evenNumber)
      return false
    }
    if((a+b)%2 == 0){
      evenNumber += a + b
    }
    return fibonacci(a+b, a, evenNumber, limite)
  }

}

export default function(parameters){

  raw_input(parameters).then(result =>{

    let inicio = parseInt(result.inicio),
      limite = parseInt(result.limite)

    fibonacci(inicio, 0, 0, limite) // 1

  })
}

