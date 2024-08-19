// Cómo copiar y/o duplicar Arrays:</h1>
    
// Método 1: La forma más primitiva (no recomendado)

// changed the original array:

let arr = ['london', 'Madrid', 'Paris']; // Arreglo principal.

let arr2 = arr; // Arreglo secundario.

console.log('arr2 Array:', arr2);

console.log('arr Array:', arr);

// Método push():

// Se usa para insertar un elemento dentro de un Array.

arr2.push('Sao Paulo');

console.log('***New City Added***');

console.log(arr2);

console.log(arr);

// We have added an item to arr2...

// But, the original array(arr) got modified too.

// Método 2: Utilizando slice().

let coloresPrimarios = ["Rojo",  "Azul", "Amarillo"];
let nuevosColores = coloresPrimarios.slice();

console.log(coloresPrimarios);
console.log(nuevosColores);

nuevosColores.push('Verde');

console.log('**********Nuevo Color Añadido!!!!**********');

console.log(coloresPrimarios);

console.log(nuevosColores);

// NOTA: Únicamente el Array "nuevosColores" fue modificado!!!!!

// Método 3: Utilizando spread operator.

let array1 = ['aa', 12, 25, 'bb'];

let array2 = [...array1];

console.log(array1);

console.log(array2);

array2.push('Sí');

console.log('**********Sentencia Añadida!!!!!**********');

console.log(array1);

console.log(array2);

// Si hacemos estos cambios en "array2", éstos sólo afectarán a dicho arreglo. 

// De la forma tradicional | Array dentro de otro Array.

let arregloTradicional1 = ['a', 'b'];

let arregloTradicional2 = [arregloTradicional1, 'c', 'd'];

console.log(arregloTradicional2);

// De la forma más moderna posible: Mediante un Spread Operator...

let miArreglo1 = ['dd', 'gg', 'zz'];

let miArreglo2 = [...miArreglo1, 'ff', 22, 'kk'];

console.log(miArreglo2);

// Otra forma más avanzada: mediante 2 variables combinadas con un Spread Operator...

let arreglo1 = ['ZZ', 'rr', 72, 'TT', 10];

let arreglo2 = ['MA', 'RU', 'SE', 'RO'];

let arreglo3 = [...arreglo1, ...arreglo2];

console.log(arreglo3);

// Método final: utilizando 'Array.from()'...

let arregloFinal1 = ['automovil', 'stationWagons', 'camioneta'];

let arregloFinal2 = Array.from(arregloFinal1);

console.log(arregloFinal1);

console.log(arregloFinal2);

arregloFinal2.push('bus');

console.log("**********VEHÍCULO AÑADIDO!!!!!**********");

console.log(arregloFinal1);

console.log(arregloFinal2);