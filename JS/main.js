const apiKey = "AIzaSyACVkEmsmuZaVT5CVcIjPz0EmpCwsCK9iQ"
const clientkey = "my_test_app"


const termino = document.querySelector(".termino")
const buscador = document.querySelector(".buscador")
const resultados = document.querySelector(".resultados")

//solicitud al servidor
buscador.addEventListener("click", () => {
    // Obtener el valor actual del campo de busqueda dentro del evento de click
    resultados.innerHTML = "";

    // URL con el termino de busqueda
    const url = `https://tenor.googleapis.com/v2/search?q=${termino.value}&key=${apiKey}&client_key=my_test_app&limit=9`;
    const peticion = fetch(url);

    peticion
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            response.results.forEach(element => {
                const urlimg = element.media_formats.gif.url;
                const img = document.createElement("img");
                img.src = urlimg;
                resultados.appendChild(img);
                
            });

        });
})