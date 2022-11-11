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

        axios.get(this.apiUrl)
        .then( email => {
            this.emails.push(email.data.response);
        })
      
    }
  },
  mounted(){
    while(this.isDone === false){
      console.log("dentro while");
      console.log("---------" + this.isDone);
      this.getApi();
      this.isDone = false;
      this.counter++;
      if(this.counter === 10){
        this.isDone = true;
        console.log("Ora e true");
      }
    }
    console.log("This works   " + this.counter);
  },
  created(){

  },
}).mount('#app');