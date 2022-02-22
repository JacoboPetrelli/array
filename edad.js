estudiantes = ["Francisco", "Sergio","Juana", "Daniel", "Mariana", "Jose", "JuanD", "Daniela", "Mateo", "Samuel", "Gabriela", "Nicolás", "Jorge", "Ana", "Jacobo", "Tomas", "Sofia"]
edades = []
let suma = 0
for(let i = 0; i<17; i++){
    do{ 
        edad = Number(prompt("Ingrese la edad de: "+estudiantes[i]))
    }
    while(isNaN(edad) || edad < 10 ||edad > 20 )
edades.push(edad)
}
for(let i = 0; i<17; i++){
    suma = suma + edades[i]
}
contenido = suma/17
let contenedor = document.querySelector("#contenedor")
contenedor.innerHTML ="El promedio de las edades es:" + contenido;
