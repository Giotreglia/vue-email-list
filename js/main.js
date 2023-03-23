const { createApp } = Vue

createApp({
  data() {
    return {
      mailArray: [],
      mailArrayLength: 10
    }
  },
  mounted() {

    for (let i = 0; i < this.mailArrayLength; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

      .then( (response) => {
            this.mailArray.push(response.data.response);
          }
      )
    }
    console.log(this.mailArray);
    
  }
}).mount('#app')