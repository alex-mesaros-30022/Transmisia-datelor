//var socket = io.connect('localhost:8000');
//
//try {
//  socket.on('connect', function () {
//    document.getElementById('client-id').innerHTML = 'Client id: ' + socket.id;
//  });
//
//  socket.on('message-from-server', function (entry) {
//    // console.dir(message);
//    var messages = document.getElementsByClassName('messages')[0];
//    let p = document.createElement('p');
//    p.innerText = entry.id + ': ' + entry.message;
//    messages.appendChild(p);
//  });
//} catch (err) {
//  alert('ERROR: socket.io encountered a problem:\n\n' + err);
//}
//
//document.getElementById('send').addEventListener('click', sendMessage);
//function sendMessage() {
//  var message = document.getElementById('message').value;
//  socket.emit('chat', message);
//}

unction run() {
var socket;
  new Vue({
    el: '#app',
    data: {
      entry: [],
      clientId: null,
      message:""
    },
   created() {
   try{
    socket=io.connect('localhost:8000');
    socket.on('connect',()=> {
    this.clientId=socket.id;
    });
    socket.om("message-from-server",(entry)=>{
    this.entries.push(entry);
    });
   }
   catch(err){
   alert("ERROR: socket encountered problem :\n\n"+err);
   }
    },
    methods:{
        sendMessage: function(){
            socket.emit('chat',this.message);
            this.message=""}
            }
    });
  }

   document.addEventListener('DOMContentLoaded',()=>
   {run();
   });

