const {createApp} = Vue;

createApp({
  data(){
    return{
      emails: [],
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      isDone : false,
      counter: 0,
    }
  },
  methods: {
    getApi(){
      if(!this.isDone){

        while(this.counter < 10){
          axios.get(this.apiUrl)
          .then( email => {
            this.emails.push(email.data.response);
            if(this.emails.length === this.counter) this.isDone = true;
          });
          this.counter++;
        };
      }
      
    }
  },
  mounted(){
    
    this.getApi();
    
  },
  created(){

  },
}).mount('#app');