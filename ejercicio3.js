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

const splitDigits = (number) => {
  /*
    Permite convertir un numero a una cadena, separando sus digitos con un guion
    Recibe un número como parametro.
    Devuelve el número, convertido en string, separando con un guion medio todos sus digitos.
    Input: 10 //// Output: "1-0"
    Si el parámetro ingresado no es un número, imprime un error en consola y devuelve Null
    */
  try {
    const input = +number;
    if (typeof input !== "number" || isNaN(input)) {
      throw new Error(`"${number}" no es un ${typeof 0}.`);
    }
    return number.toString().split("").join("-");
  } catch (error) {
    console.error("Ocurrió un error:", error.message);
    return null;
  }
};

const input4 = 10;
splitDigits(input4); // '1-0'

const input5 = 1;
splitDigits(input5); // '1'

const input6 = 11234;
splitDigits(input6); // '1-1-2-3-4'

/*
3.3 Ejercicio
Crea una función para que con estos datos de entrada se produzca los siguientes resultados:
*/

const getLengthAndReverse = (string) => {
  /*
    Permite contar la longitud de una cadena e invertir su orden.
    Recibe un string como parametro.
    Devuelve otro string con la longitud de la cadena original más el string original invertido.
    Input: "string"//// Output: "6 gnirts"
    Si el parametro ingresado no es un string, imprime un error en consola y devuelve Null
    */

  try {
    if (typeof string !== "string") {
      throw new Error(
        `El parámetro debe ser string. Recibido: ${typeof string}`
      );
    }
    const revesed = string.split("").reverse().join("");
    const length = string.length;
    const result = `${length} ${revesed}`;
    return result;
  } catch (error) {
    console.error("Ocurrió un error:", error.message);
    return null;
  }
};

const input7 = "string";
getLengthAndReverse(input7); // '6 gnirts'

const input8 = "variable";
getLengthAndReverse(input8); // '8 elbairav'

const input9 = "pointer";
getLengthAndReverse(input9); // '7 retniop'
