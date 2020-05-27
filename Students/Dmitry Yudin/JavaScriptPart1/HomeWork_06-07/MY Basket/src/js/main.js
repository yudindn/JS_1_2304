let names = ['iPhone SE', 'iPhone 11 pro', 'iPad Pro', 'MacBook Air', 'iMac'];
let prices = [450, 950, 850, 1100, 2000];
let ids = [1, 2, 3, 4, 5];
let imgs = ['../src/img/iphone-se.jpg', 
            '../src/img/iphone-11-pro.jpg', 
            '../src/img/ipad-pro.jpg', 
            '../src/img/macbook-air.jpg', 
            '../src/img/imac-27.jpg',
        ]

let createItem = index => ({
    product_name: names[index],
    price: prices[index],
    id_product: ids[index],
    img: imgs[index]
});

let fillCatalog = () => {
    ids.forEach((el, index) => {
        catalog.items.push(createItem(index));
    });
};


let catalog = {
    items: [],
    container: '.catalog-items',

    init() {
        fillCatalog();
        this.render();
    },
    render() {
        let htmlStr = '';
        this.items.forEach (item => {
            htmlStr += `<div class="catalog-item">
                        <img src="${item.img}" alt="">
                        <div class="desc">
                            <h3>${item.product_name}</h3>
                            <p>${item.price} $</p>
                            <button class="buy-btn">Buy</button>
                        </div>
                    </div>`
        })
        document.querySelector(this.container).innerHTML = htmlStr;      
    }
}

let basket = {
    items: [],
}

catalog.init();
