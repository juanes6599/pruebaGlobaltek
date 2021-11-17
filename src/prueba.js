const primerArgumento = [
    {nombre: 'John', apellido: 'Doe'}, 
    {nombre: 'Jane', apellido: ''}, 
    {nombre: 'Jose', apellido: 'Doe'}
]
const segundoArgumento =  {apellido: 'Doe'}

function buscar(personas, personaBuscada){
    key = Object.keys(personaBuscada)[0]
    value = personaBuscada[key]
    
    return personas.filter((persona) => persona[key] == value);
  }

console.log(buscar(primerArgumento,segundoArgumento))