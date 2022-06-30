getProducts()
.then( products => {

    const productsDiv = document.querySelector('#items');
    products.forEach( product => {
        productsDiv.innerHTML += `
                <div class="item">
                    <img class="item__image" src="item${product.id}.jpeg" alt="Obrazek produktu">
                    <p class="item__name">${product.name}</p>

                    <div class="item__util">
                        <p class="item__price"> Cena: ${product.price}PLN </p>
                        <p class="item__buy"> KUP </p>
                    </div>
                </div>
        `
    } );

} )
.catch( err => {
    console.log(err);
} )