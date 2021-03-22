function run() {
  new Vue({
    el: '#app',
    data: {
      users: [],
      showNewUser:false,
      newUser:{},
      changeUser:false ,
      user12:{},
      usersService: null
    },
    created: function () {
      this.usersService = users();
      this.usersService.get().then(response => (this.users = response.data));
    },
    methods:{
        deleteUser:function(index){
            this.usersService.deleteUser(index).then(response => (
            this.users = response.data
        ));
        },

        addUser: function(){
        this.usersService.addUser(this.newUser).then(response => (
         this.users = response.data
         ));
      //   this.usersService.addUser(userscity)='Botosani';
      },

        modifica: function(index,user){
            this.usersService.modifica(index,this.user).then(response => (
            this.users = response.data
            ));
        }
     }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
