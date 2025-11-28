/* 
Glosario
Interfaz: herramienta que permite definir la estructura de un objeto, especificando los nombres y los tipos de sus propiedades y métodos. 
*/

interface User {
    id: number,
    email: string,
    password: string,
    first_name: string,
    last_name: string,
}

const user: User = {
    id: 123,
    email: "ejemplo@mail.com",
    password: "Abc123",
    first_name: "Paul",
    last_name: "Atreides",
}