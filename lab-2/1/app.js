function run() {
  new Vue({
    el: '#app',
    data: {
      message: '',
      message1:''
    },
    methods: {
      doSomething: function () {
        console.log('The input string value is: ' + this.message);
        if(this.message==='123')
            this.message1=this.message;
         else
            this.message1='';
      }
    }
  });
}

 //document.getElementById("app").addEventListener("click",message);

document.addEventListener('DOMContentLoaded', () => {
  run();
});
