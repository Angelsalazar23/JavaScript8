function verdad() {
  return true;
}

console.log(verdad());

function timeOutPromesa() {
  setTimeout(function () {
    console.log("Hola soy una promesa");
  }, 5000);
  return true;
}

const promesa = new Promise((resolve, reject) => {
  if (timeOutPromesa() === true) {
    resolve();
  } else {
    reject();
  }
});

promesa.then(() => console.log("exito")).catch(() => console.log("error"));

//// FUNCION INDICES PARES AUTOMATICOS ////

function* paresAutomaticos() {
  let id = 0;

  while (true) {
    id++;
    yield id*2;



    if (id > 10) {
      return; // con este return hago que la funcion se pare anque tenga un ciclo infinito
    }


  }
}



const genera= paresAutomaticos()

console.log(genera)
console.log(genera.next())
console.log(genera.next())
console.log(genera.next())