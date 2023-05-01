const express = require('express');
const cors = require('cors');
const app = express();
const http =require('http')
const socketio = require('socket.io')
const {db}=require('./FirebaseOperations/Firebase');
const ref = db.ref('room');
const tasks = require('./routes/room');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');




app.use(cors())
app.use(express.json()); 

app.use('/api/v1/room/1/', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);


const server = http.createServer(app);
const io = socketio(server,{
    cors:{
      origin:"http://localhost:3000",
    },
});



ref.child('devices').on('child_changed', (snapshot) => {
  var changedPost = snapshot.val();
  io.emit('server-message', changedPost);
  console.log('The updated post in database is ' , changedPost);
});




ref.child('properties').on('child_changed', (snapshot) => {
  var changedPost = snapshot.val();
  io.emit('server-message-energyconsuption', changedPost);

});



io.on('connection', (socket) => {
  socket.setMaxListeners(15);

  console.log('A user connected'); 

  


  socket.on('client-message', (data) => {

    console.log('client message',data);


    setInterval( () => {
      const now =new Date();
      const hour=now.getHours();
      const minutes=now.getMinutes();
      const seconds =now.getSeconds();
      const [receivedHoursON,receivedMinutesON] = data.onTime.split(":");
      const clientHoursON=parseInt(receivedHoursON);
      const clientMinutesON=parseInt(receivedMinutesON);
      if(hour===clientHoursON&&minutes===clientMinutesON&&seconds===0&&data.status===false){
        data.status=true
        console.log("turning on ",data.id,data.name)
        ref.child('devices').child(data.id).update({
          status: true,
          turnedOnAt:`${hour}:${minutes}`
        })
      }

      const [receivedHoursOFF,receivedMinutesOFF] = data.offTime.split(":");
      const clientHoursOFF=parseInt(receivedHoursOFF);
      const clientMinutesOFF=parseInt(receivedMinutesOFF);
      if(hour===clientHoursOFF&&minutes===clientMinutesOFF&&seconds===0&&data.status===true){
        data.status=false
        console.log("turning off",data.id,data.name)
        ref.child('devices').child(data.id).update({
          status: false,
          turnedOnAt:''
        })
      }





    },1000);



    const hour=new Date().getHours();
    const minutes=new Date().getMinutes();
    const turnedOnAt=data.status===true?`${hour}:${minutes}`:"";
    ref.child('devices').child(data.id).update({
      ...data,
      turnedOnAt:turnedOnAt
    })



    socket.on('disconnect',()=>{
      console.log("user disconnected")
    })


  });


});
const port = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    
    server.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();