import raw_input from './raw_input'

function checkmul(n){

  if(n%3 == 0 || n%5 == 0){
    return true
  }else{
    return false
  }

}

export default function(parameters){

  raw_input(parameters).then(result =>{

    let limite = parseInt(result.limite),
      sum = 0

    for (let i = 1; i <= limite ; i++) {
      if(checkmul(i)){
        console.log("Numero " + i)
        sum += i
      }
    }

    console.log("La suma es " + sum)

  })
}

