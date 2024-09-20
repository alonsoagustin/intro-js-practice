/*
Ejercicio 1
Crea un archivo ejercicio1.js que tenga un objeto llamado usuario con los siguientes campos:
- Nombre (el tuyo o inventado)
- Apellidos (el tuyo o inventado)
- Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas de inicio de cada módulo. Fecha en formato “YYYY-MM-DD”
- Si estás en búsqueda activa con un valor de verdadero o false
En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del objeto que hemos creado anteriormente.
*/

const user = {
  name: "Agustín",
  lastName: "Alonso",
  subjects: [
    {
      name: "Introducción a JavaScript",
      date: "2024-09-04",
    },
    {
      name: "Fundamentos HTML, CSS3",
      date: "2024-09-23",
    },
    {
      name: "Modelado de datos e introducción a SQL",
      date: "2024-10-14",
    },
    {
      name: "Desarrollo Backend con Node.js",
      date: "2024-10-21",
    },
    {
      name: "Desarrollo Frontend con JavaScript",
      date: "2024-11-11",
    },
    {
      name: "Frontend PRO",
      date: "2024-12-02",
    },
    {
      name: "Web Components",
      date: "2024-12-09",
    },
    {
      name: "Fundamentos React",
      date: "2024-12-16",
    },
    {
      name: "Testing con JavaScript",
      date: "2025-01-20",
    },
    {
      name: "Desarrollo Backend Avanzado",
      date: "2025-01-27",
    },
    {
      name: "REACT Avanzado",
      date: "2025-02-17",
    },
    {
      name: "Configuración de servidores",
      date: "2025-03-10",
    },
  ],
  lookingForWork: true,
};

const findSubjectByKeyword = (keyword) => {
  /*
    Busca un módulo usando una palabra clave
    Recibe una palabra clave como parámetro.
    Devuelve un listado con todos los módulos que se encuentren en el objeto user y que contengan en su nombre dicha palabra clave.
    En caso de no encontrar ningún módulo, devuelve un listado vacío.
    */
  const normalizedKeyword = keyword.trim().toLowerCase();
  const filteredSubjects = user.subjects.filter((subject) =>
    subject.name.trim().toLowerCase().includes(normalizedKeyword)
  );
  return filteredSubjects;
};

const displayStartDates = (array) => {
  /*
    Imprime en consola un listado con el nombre y la fecha de inicio de cada módulo.
    Recibe un listado de objetos como parámetro.
    Si el listado contiene al menos un objeto, imprime en la consola la propiedad "name" y la propiedad "date" de cada objeto.
    Si el listado no contiene elementos, imprime en la consola 'No hemos encontrado ningún módulo.'
  */
  if (array.length > 0) {
    array.forEach((element) =>
      console.log(`El módulo "${element.name}" comienza el ${element.date}`)
    );
  } else {
    console.log("No hemos encontrado ningún módulo.");
  }
};

const react = findSubjectByKeyword("react");

displayStartDates(react);
