interface Alumno{
    nombre: string;
    edad:number;
    curso: string;
    email?: string;
    nota:number|string;
}




const alumno= {
    edad: 23,
    nombre: "Juan",
    curso: "Type-script",
    email: "juan@gmail.com",
    nota: 7.5
}
console.log(`El alumno ${alumno.nombre} tiene ${alumno.edad} años y su nota es ${alumno.nota}`);

let mascotas:string[]=['Perro', 'Gato', 'Hamster'];
mascotas[1]='Pajaro';
mascotas.push('Tortuga');
console.log(mascotas);

let notas:(number|string)[]=[7, 8, 9, 'APROBADO'];
notas.push(10);
notas.push('Sobresaliente');
console.log(notas);


