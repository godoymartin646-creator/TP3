const años =["1930","1978", "1986","1990","2014", "2022"];
let ordenAscendente = true;


const contenedor = document.getElementById("contenedor-años");
const boton = document.getElementById("btn-ordenar");


function mostrarAños(){
    contenedor.innerHTML = " ";
    años.forEach(año => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-años");
        tarjeta.textContent = año;

        contenedor.appendChild(tarjeta);
    });
}


boton.addEventListener("click", () => {
    if (ordenAscendente) {
        años.sort((a, b) => Number(a) - Number(b));
        boton.textContent = "Ordenar de mayor a menor";
    } else {
        años.sort((a, b) => Number(b) - Number(a));
        boton.textContent = "Ordenar de menor a mayor";
    }

    ordenAscendente = !ordenAscendente; 
    mostrarAños();
});


mostrarAños();