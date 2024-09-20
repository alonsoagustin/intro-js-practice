/*
Ejercicio 3
En estos ejercicios no tienes acceso al enunciado. Debes deducir qué hacer observando los datos de entrada y el resultado. 
Lo importante en estos ejercicios es ver el patrón con cada ejemplo. En ningún caso es
necesario usar ningún tipo de condicional.
*/

/*
3.1 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes resultados:
*/

const arrayToRelativePath = (array) => {
  /* 
    Permite construir el relative path.
    Recibe un listado como parámetro.
    Devuelve una cadena con el relative path.
    Une todos los elementos del listado con un slash, excepto el último, que es unido con un punto.
  */
  const extension = array.slice(-1);
  const located = array.slice(0, array.length - 1);
  const path = `${located.join("/")}.${extension}`;
  return path;
};

const input1 = ["Downloads", "Videos", "capture", "mp4"];
arrayToRelativePath(input1); // 'Downloads/Videos/capture.mp4'

const input2 = ["CodinGame", "python", "py"];
arrayToRelativePath(input2); // 'CodinGame/python.py'

const input3 = [
  "programming",
  "languages",
  "easy",
  "beginner",
  "useful",
  "pythonstuff",
  "py",
];
arrayToRelativePath(input3); // 'programming/languages/easy/beginner/useful/pythonstuff.py'

/*
3.2 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes resultados:
*/

const input4 = 10;
// create your function here
// yourFunction(input4); // '1-0'

const input5 = 1;
//yourFunction(input5); // '1'

const input6 = 11234;
//yourFunction(input6); // '1-1-2-3-4'

/*
3.3 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes resultados:
*/

const input7 = "string";
// create your function here
// yourFunction(input7); // '6 gnirts'

const input8 = "variable";
// yourFunction(input8); // '8 elbairav'

const input9 = "pointer";
// yourFunction(input9); // '7 retniop'
