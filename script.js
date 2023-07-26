const App = {
    data() {
        return {
            products: [{
                name: 'Bread',
                price: 30
            },
            {
                name: 'Butter',
                price: 50
            },
            {
                name: 'Salt',
                price: 15
            },
            {
                name: 'Milk',
                price: 65
            },
            {
                name: 'Cheese',
                price: 60
            },
            {
                name: 'Ice-cream',
                price: 90
            },
            {
                name: 'Coke',
                price: 40
            }
            ]
        }
    },
    methods: {
        sortToUp() {
            this.products.sort(function (a, b) {
                return a.price - b.price;
            });
        },
        sortToDown() {
            this.products.sort(function (a, b) {
                return a.price - b.price;
            });
            this.products.reverse();
        }
    }
};
Vue.createApp(App).mount('#app');