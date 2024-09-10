/* 1- Dado un array de objetos [{ nombre: "Juan", edad: 20 }, { nombre: "María",
    edad: 25 }, { nombre: "Pedro", edad: 30 }], usa map para crear un nuevo array
    de strings que contenga solo los nombres. */

const personas = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 25 },
  { nombre: "Pedro", edad: 30 },
];

const arregloNombres = [...personas].map((persona) => persona.nombre);

console.log(arregloNombres);

/* Dado un array de objetos [{ nombre: "Carlos", edad: 17 }, { nombre: "Ana",
    edad: 23 }, { nombre: "Luis", edad: 16 }], usa filter para obtener solo los objetos
    donde la persona sea mayor de edad (edad >= 18). */

const otrasPersonas = [
  { nombre: "Carlos", edad: 17 },
  { nombre: "Ana", edad: 23 },
  { nombre: "Rocio", edad: 25 },
  { nombre: "Luis", edad: 16 },
];

const mayores18 = otrasPersonas.filter((persona) => persona.edad > 18);

console.log(mayores18);

/* Dado un array de números [2, 3, 4, 2, 3, 5, 4, 5, 6], utiliza un Map para contar
cuántas veces aparece cada número en el array. El resultado debe ser un Map
donde las claves sean los números del array y los valores sean la cantidad de
veces que cada número aparece. */

const numeros = [2, 3, 4, 2, 3, 5, 4, 5, 6];

const mapaContador = new Map();

let contador = 0;
/** Resolucion 1 */
for (let i = 0; i < numeros.length; i++) {
  for (let y = 0; y < numeros.length; y++) {
    if (numeros[i] === numeros[y]) {
      contador++;
    }
  }
  mapaContador.set(numeros[i], contador);
  contador = 0;
}
console.log(mapaContador);
/**Resolucion 2 */

const mapaContador2 = new Map();

for (let num of numeros) {
  if (mapaContador2.has(num)) {
    mapaContador2.set(num, mapaContador.get(num) + 1);
  } else {
    mapaContador2.set(num, 1);
  }
}

console.log(mapaContador2);

/* Dado un array de números [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], usa una combinación de
filter, map, y reduce para obtener la suma de los cuadrados de los números
pares. */

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totalParesCuadrado = numeros2
  .filter((pares) => pares % 2 === 0)
  .map((cuadrado) => cuadrado ** 2)
  .reduce((total, valor) => total + valor, 0);

console.log(totalParesCuadrado);

/* Dado un objeto { a: 1, b: 2, c: 3 }, transforma el objeto en un Map donde las
claves son las propiedades del objeto y los valores son los valores
correspondientes. */

const objeto = {
  a: 1,
  b: 2,
  c: 3,
};

const mapObjeto = new Map();

/**Solucion 1 */
for (let key in objeto) {
  mapObjeto.set(key, objeto[key]);
}
console.log(mapObjeto);

/**Solucion 2 */
Object.keys(objeto).forEach((key) => {
  console.log(key, objeto[key]);
});
/**Solucion 3 */
Object.entries(objeto).forEach(([key, value]) => {
  console.log(key, value);
});

/* Dado un Map que contiene [["nombre", "Pedro"], ["edad", 30], ["ciudad",
    "Sevilla"]], convierte este Map en un objeto. */

const m = new Map([
  ["nombre", "Pedro"],
  ["edad", 30],
  ["ciudad", "Sevilla"],
]);

const per = {};

m.keys().forEach((k) => {
  per[k] = m.get(k);
});

console.log(per);

/* Dado dos arrays de objetos: estudiantes con propiedades id y nombre, y notas
con propiedades idAlumno y nota, usa filter y map para combinar ambos
arrays en uno nuevo que contenga el nombre del alumno y su nota
correspondiente. */

const estudiantes = [
  { id: 1, nombre: "Maria" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Caro" },
  { id: 4, nombre: "Juan" },
];

const notas = [
  { id: 1, nota: 10 },
  { id: 2, nota: 9 },
  { id: 3, nota: 8 },
];

const resultado = estudiantes.map((estudiante) => {
  /* El método filter() devuelve un array, por lo que debes acceder a la primera 
    posición de ese array con [0] antes de intentar acceder a la propiedad nota. */
  const notaEstudiante = notas.filter((nota) => nota.id === estudiante.id)[0];
  console.log(notaEstudiante);
  return {
    nombre: estudiante.nombre,
    nota: notaEstudiante ? notaEstudiante.nota : "Sin nota",
  };
});

console.log(resultado);

/* Opcion con find */
const resultado2 = estudiantes.map((estudiante) => {
  const notaEstudiante = notas.find((nota) => nota.id === estudiante.id);
  return {
    nombre: estudiante.nombre,
    nota: notaEstudiante ? notaEstudiante.nota : "Sin nota",
  };
});

/* Dado un array de números [1, 2, 2, 3, 4, 4, 5, 1, 6, 7], usa Set junto con filter
para eliminar los elementos duplicados, pero manteniendo el primer elemento
encontrado en su posición original. */

const numeros3 = [1, 2, 2, 3, 4, 4, 5, 1, 6, 7];

const setNumeros = new Set();

const newNumeros3 = numeros3.filter((num) => {
  if (!setNumeros.has(num)) {
    setNumeros.add(num);
    return true;
  }

  return false;
});

console.log(newNumeros3);
