const VueObj = new Vue({
    el: '[data-vue="mainVue"]',
    data: {
        booktitle: "",
        editing: null,
        datas: [],
    },
    methods: {

    },
})









axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        // handle success
        console.log(response);
        VueObj.datas = response.data;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });