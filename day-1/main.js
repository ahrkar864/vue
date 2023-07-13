new Vue({
    el: '#app',
    data: {
        greeting: 'Hello World!',
        user: 'Ahrkar kyaw',
        city: 'Yangon'
    },
    methods: {
        changeGreeting() {
            this.greeting = this.greeting === 'Hello World!' ?
                'What is up!' :
                'Hello World!';
        }
    }
});

let greetingTag = document.getElementsByTagName("h2")[0];
