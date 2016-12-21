var app = new Vue({
    el: '#app',
    data: {
        brandName: '',
        maxUsers: '',
        maxStories: '',
        maxSurveys: '',
        maxDocs: ''
    },
    methods: {
        submit: function (event){
            event.preventDefault();
            this.$http.post('/run-bee', {}, (data) => {
                console.log(data);
            });
        }
    }
});

