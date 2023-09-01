const shopContent = document.getElementById("shopContent");
const cart = []; // Este es nuestro carrito, un array vacio

productos.forEach((product) => {
    const content = document.createElement("div");
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.productName}</h3>
        <p>${product.price} $</p>
    `;
    shopContent.append(content);

    // Cada producto tiene un boton de comprar
    const buyButton = document.createElement("button");
    buyButton.innerText = "Comprar";

    content.append(buyButton); // lo adherimos al content

    // Creamos un evento de escucha atravez de un click
    buyButton.addEventListener("click", ()=>{
        cart.push({ // agregamos al carrito 
            id: product.id,
            productName: product.productName,
            price: product.price,
            quanty: product.quanty,
            img: product.img,
        })
        console.log(cart)
    })
});