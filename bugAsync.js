/*
Ejercicio 5 Arreglar bug de asincronía

Tenemos otro error que nuestro cliente nos pide arreglar. 
El cliente está pidiendo un usuario y nos dice que está usando el id correcto (el 1). Pero siempre le da undefined. Nos ha pasado el código que tenemos que revisar y arreglar.
Para este problema crear un archivo llamado bugAsync.js con la solución.
*/

// Este programa simula una llamada asincrónica para obtener un usuario

const cargaUsuarios = () => {
  /*
    Simula la carga de un listado de usuarios.
    Devuelve una promesa que se resuelve después de 1 segundo.
    */

  return new Promise((resolve) => {
    setTimeout(() => {
      const usuarios = [
        { id: 1, nombre: "John Doe" },
        { id: 2, nombre: "Jane Smith" },
        { id: 3, nombre: "Michael Johnson" },
        { id: 4, nombre: "Emily Brown" },
        { id: 5, nombre: "David Williams" },
      ];
      resolve(usuarios);
    }, 1000);
  });
};

function obtenerUsuario(id) {
  /*
    Busca un usuario por su ID
    Devuelve una promesa que intenta obtener un usuario con el `id` proporcionado después 3 segundos.
    Si el parámetro no es igual a 1, la promesa se rechaza con un error indicando que el usuario no se encontró.
    */

  return new Promise((resolve, reject) => {
    let usuario;
    setTimeout(() => {
      if (id === 1) {
        usuario = { id: 1, nombre: "John Doe" };
        resolve(usuario);
      } else {
        reject(new Error("Usuario no encontrado"));
      }
    }, 3000);
  });
}

const main = async () => {
  /*
    Carga usuarios y obtiene un usuario específico de forma asíncrona.
    Utiliza `cargaUsuarios` para cargar todos los usuarios y `obtenerUsuario` para obtener un usuario por ID.
    Si ocurre un error durante la ejecución de alguna de las funciones, el error se captura y se imprime en la consola.
    */

  try {
    const usuarios = await cargaUsuarios();
    console.log("Usuarios cargados:", usuarios);
    const usuario = await obtenerUsuario(1);
    console.log("Usuario obtenido", usuario);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

main();
