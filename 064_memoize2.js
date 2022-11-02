
const memoize = (func) => {
  const results = {};
  return (...args) => {
    //Se recibe ...args porque puede ser uno o varios argumentos (dependiendo del ejercicio)
    //función anónima para guardar los resultados. Puede ser una función convencional normal too
    //!En ejemplo recibo el número iterador (0,1,2,3....), entonces ...args puede ser args
    if (!results[args]) {
      //Si true
      //Ejecuta la función func si no hay resultados previos guardados en el objeto
      //args para la ubicación recibida
      //La función func es entonces la función fibonacci que estoy envolviendo abajo
      results[args] = func(args);
      //Guardo el resultado obtenido de la función fibonacci()
    }
    //console.log(results)
    return results[args];
    //El valor existe, retorno el valor guardado en results para la ubicación
  };
};

//Envuelvo la función fibonacci() en la función memoize(). la función func es entonces
//la función fibonacci
//La función fibonacci solamente se ejecuta CUANDO NO HAY VALOR
const fibonacci = memoize(num => {
  if(num<= 2){
    return 1;
  }
  let result= fibonacci(num-1) + fibonacci(num-2)
  return result;
});


console.log(fibonacci(10))