var checarIdade = function(idade) {
  return new Promise(function(resolve,reject){
      if(idade>=18){
          resolve('O usuário é maior de idade');
      } else {
          reject('O usuário é menor de idade');
      }
      
  })
}

checarIdade(17)
  .then(function(response){
      console.log(response);
  })
  .catch(function(error){
      console.warn(error);
  });