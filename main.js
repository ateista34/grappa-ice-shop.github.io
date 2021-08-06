var app = new Vue({
    el: '#app',
    data: {
        product: 'Grappa Ice',
        image: 'grappa_blue.jpeg',
        ilosc_grappy: 100,
        details: ['grappa', 'ice', 'najsowosc'],
        variants: [
            {
                variantId: 1,
                variantColor: 'blue',
                variantImage: 'grappa_blue.jpeg'
            },
            {
                variantId: 2,
                variantColor: 'green',
                variantImage: 'grappa_green.jpg'
            }
        ],
        cart: 0
    }
})
