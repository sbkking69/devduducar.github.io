const products = [
    { id: 1, img: 'https://via.placeholder.com/200?text=Автозапчасть+1', price: '1000 ₽', reviews: '4 отзыва', rating: 4.5 },
    { id: 2, img: 'https://via.placeholder.com/200?text=Автозапчасть+2', price: '1500 ₽', reviews: '10 отзывов', rating: 4.0 },
    { id: 3, img: 'https://via.placeholder.com/200?text=Автозапчасть+3', price: '2000 ₽', reviews: '7 отзывов', rating: 3.5 },
    { id: 4, img: 'https://via.placeholder.com/200?text=Автозапчасть+4', price: '2500 ₽', reviews: '5 отзывов', rating: 4.2 },
    { id: 5, img: 'https://via.placeholder.com/200?text=Автозапчасть+5', price: '3000 ₽', reviews: '3 отзыва', rating: 3.8 },
    { id: 6, img: 'https://via.placeholder.com/200?text=Автозапчасть+6', price: '3500 ₽', reviews: '8 отзывов', rating: 4.6 },
    { id: 7, img: 'https://via.placeholder.com/200?text=Автозапчасть+7', price: '4000 ₽', reviews: '6 отзывов', rating: 4.3 },
    { id: 8, img: 'https://via.placeholder.com/200?text=Автозапчасть+8', price: '4500 ₽', reviews: '2 отзыва', rating: 3.0 },
    { id: 9, img: 'https://via.placeholder.com/200?text=Автозапчасть+9', price: '5000 ₽', reviews: '9 отзывов', rating: 4.7 },
    { id: 10, img: 'https://via.placeholder.com/200?text=Автозапчасть+10', price: '5500 ₽', reviews: '1 отзыв', rating: 2.5 },
    { id: 11, img: 'https://via.placeholder.com/200?text=Автозапчасть+11', price: '6000 ₽', reviews: '10 отзывов', rating: 4.1 },
    { id: 12, img: 'https://via.placeholder.com/200?text=Автозапчасть+12', price: '6500 ₽', reviews: '7 отзывов', rating: 3.9 },
    { id: 13, img: 'https://via.placeholder.com/200?text=Автозапчасть+13', price: '7000 ₽', reviews: '4 отзыва', rating: 4.4 },
    { id: 14, img: 'https://via.placeholder.com/200?text=Автозапчасть+14', price: '7500 ₽', reviews: '3 отзыва', rating: 3.7 },
    { id: 15, img: 'https://via.placeholder.com/200?text=Автозапчасть+15', price: '8000 ₽', reviews: '5 отзывов', rating: 4.0 },
    { id: 16, img: 'https://via.placeholder.com/200?text=Автозапчасть+16', price: '8500 ₽', reviews: '6 отзывов', rating: 4.5 },
    { id: 17, img: 'https://via.placeholder.com/200?text=Автозапчасть+17', price: '9000 ₽', reviews: '9 отзывов', rating: 4.2 },
    { id: 18, img: 'https://via.placeholder.com/200?text=Автозапчасть+18', price: '9500 ₽', reviews: '8 отзывов', rating: 4.3 },
    { id: 19, img: 'https://via.placeholder.com/200?text=Автозапчасть+19', price: '10000 ₽', reviews: '2 отзыва', rating: 3.1 },
    { id: 20, img: 'https://via.placeholder.com/200?text=Автозапчасть+20', price: '10500 ₽', reviews: '1 отзыв', rating: 2.9 }
];

let loadedProducts = 0;
const productsPerPage = 10;

function loadProducts() {
    const catalog = document.getElementById('catalog');
    for (let i = loadedProducts; i < loadedProducts + productsPerPage && i < products.length; i++) {
        const product = products[i];
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.img}" alt="Product Image">
            <div class="price">${product.price}</div>
            <div class="reviews">${product.reviews}</div>
            <div class="rating">Рейтинг: ${product.rating}</div>
            <button>В корзину</button>
        `;
        catalog.appendChild(card);
    }
    loadedProducts += productsPerPage;
    if (loadedProducts >= products.length) {
        document.getElementById('load-more').style.display = 'none';
    }
}

document.getElementById('load-more').addEventListener('click', loadProducts);

// Изначальная загрузка продуктов
loadProducts();
