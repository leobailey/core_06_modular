
//import Vue from 'vue';
//import axios from 'axios';
//import VueAxios from 'vue-axios';
//Vue.use(axios)
//const Vue = require('vue');

const growler = new Vue({
    el: '#growler',
    data: {
        Big: "Vue Area #1",
        Little: "This is where my view stuff happens!!!",
        books: null
    },
    mounted () {
        this.info = "info got initialised";
        // axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        axios.get('/api/books')
        .then(response => (this.books = response.data))
        .catch(error => console.log(error))
    }
}); 
