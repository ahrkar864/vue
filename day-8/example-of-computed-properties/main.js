new Vue({
    el: '#app',
    data: {
      author: {
        name: 'Ahrkar Kyaw',
        books: [
          'Vue - Advanced Guide',
          'Vue - Basic Guide',
          'Vue - the Mystery'
        ]
      },
      number: {
        count: 0
      }
    },
    computed: {
      publishedBooksMessage() {
        return this.author.books.length > 0 ? 'Yes' : 'No';
      },
      count: {
        get() {
          return this.number.count;
        },
        set(value) {
          this.number.count = value; // Fix the typo here (changed ',' to '.')
        }
      }
    },
    methods: {
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      }
    }
  });
  