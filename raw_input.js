var prompt = require('prompt');

export default function(parameters){

  return new Promise(
    function(resolve, reject){

      prompt.start();

      prompt.get(parameters, function (err, result) {
        if(err){
          reject(err)
        }
        resolve(result)
      })

    }
  )

}
