// VERBOS HTTP o METODOS HTTP 

// GET 
// pedimos informacion 
// mandamos una peticion a una url y la api nos responde con informacion

const form = document.querySelector("#crear-nuevo")
const inputNombre = document.querySelector("#nombre")
const inputEmail = document.querySelector("#email")

fetch("https://reqres.in/api/users")
.then((res) => res.json())
.then((data) => {
  mostrarEnHTML(data.data)
})

const mostrarEnHTML = (data) => {
  const usuarios = document.querySelector("#usuarios")

  const html = data.reduce((acc, curr) => {
    return acc + `<div class="card">
      <h1>${curr.first_name}</h1>
      <img src="${curr.avatar}"></img>
    </div>`
  }, "")
  usuarios.innerHTML = html
}

form.onsubmit = (e) => {
  e.preventDefault()
  const nuevoUsuario = {
    nombre: inputNombre.value, 
    email: inputEmail.value
  }

  crearNuevoUsuarioAPI(nuevoUsuario)
}

const crearNuevoUsuarioAPI = (user) => {
  fetch("https://reqres.in/api/users", {
    method: "POST", 
    body: JSON.stringify(user), 
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
}
// crear informacion
// POST 

// toda peticion http tiene dos campos opcionales
// headers 
// body 


// fetch("https://reqres.in/api/users", {
//   method: "POST", 
//   // la api me va a decir lo que tengo que mandar en el body
//   body: JSON.stringify({
//     name: "morpheus",
//     job: "leader", 
//   }), 
//   // la api me va a decir lo que tengo que mandar en los headers
//   headers: {
//     "Content-Type": "application/json"
//   }
// }).then((res) => res.json())
// .then((data) => {
//   console.log(data)
// })


// // actualizar informacion
// // PUT 
// // sirve para modificar TODA la informacion de un objeto 

// // PATCH 
// // sirve para modificar ALGUNAS de las propiedades de un objeto

// fetch("https://reqres.in/api/users/2", {
//   method: "PUT", 
//   body: JSON.stringify({
//     "first_name": "LALALALA",
//   }), 
//   headers: {
//     "Content-Type": "application/json"
//   }
// }).then(res => res.json())
// .then((data) => {
//   console.log(data)
// })


// // borrar informacion
// // DELETE 

// fetch("https://reqres.in/api/users/2", {
//   method: "DELETE", 
//   headers: {
//     "Content-Type": "application/json"
//   }
// }).then((res) => res.json())
// .then((data) => {
//   console.log(data)
// })


// // respuesta de la api
// // "status code", codigo de estatus

// // 200 --> salio todo bien
// // 400 --> algo salio mal por TU culpa 
// // 500 --> algo salio mal por MI culpa 

