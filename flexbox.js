const años =["1930","1978", "1986","1990","2014", "2022"];

const contenedor = document.getElementById("contenedor-años");
años.forEach(año => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-años");
    tarjeta.textContent = año;

    contenedor.appendChild(tarjeta);
})