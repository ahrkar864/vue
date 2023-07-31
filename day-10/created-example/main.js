new Vue({
    el: '#app',
    data: {
        name: 'loading...',
        email: 'loading...',
        company: {
            name: 'loading...',
            catchPhrase: 'loading...',
        }
    },
    created() {
        axios.get(
                'https://jsonplaceholder.typicode.com/users'
            ).then((response) => {
              // Use response to update data
                const data = response.data;
                const randomUser = response.data[
                    Math.floor(Math.random() * data.length)
                ];

                this.name = randomUser.name;
                this.email = randomUser.email;
                this.company.name = randomUser.company.name;
                this.company.catchPhrase = 
                randomUser.company.catchPhrase;
        });
    },
    mounted() {
        console.log(this.$el);
    }
});