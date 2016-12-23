/**
 * Creating an instance of the Vue class
 * */ 
var app = new Vue({
    el: '#app',
    data: { 
            brandName: '',
            maxUsers: '',
            maxStories: '',
            maxSurveys: '',
            maxDocs: ''
    },
    // submitting the post request to the Bee CLI to start running
    methods: {
        submit: function (event){
            event.preventDefault();
            console.log({data:{brandName:this.brandName, maxUsers:this.maxUsers,maxStories:this.maxStories,maxSurveys:this.maxSurveys,maxDocs:this.maxDocs}});
            this.$http.post('/run-bee', {data:{brandName:this.brandName, maxUsers:this.maxUsers,maxStories:this.maxStories,maxSurveys:this.maxSurveys,maxDocs:this.maxDocs}}, (data) => {
                console.log(data);
            });
        }
    }
});