const { createApp } = Vue

createApp({
  data() {
    return {
      mailArray: [],
      mailArrayLength: ''
    }
  },
  methods: {
    generaMail() {
      this.mailArray = [];
      
      for (let i = 0; i < this.mailArrayLength; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
  
        .then( (response) => {
              this.mailArray.push(response.data.response);
              
            }
        )
      }
      
      
    }
  },
    
}).mount('#app')