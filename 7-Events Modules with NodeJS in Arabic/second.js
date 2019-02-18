const event = require('events');
const myEmitter = new event.EventEmitter();

// // 1- Rigister listner 
// myEmitter.on('SomeEvent' , function(){
//     console.log('fire Event');   
// });
// // 2- fire or raise event
// myEmitter.emit('SomeEvent');

///////////////////////////////
// You can set parameter
// 1- Rigister listner 
myEmitter.on('SomeEvent' , function(msg){
    console.log(msg);   
});
// 2- fire or raise event
myEmitter.emit('SomeEvent','You have parameter!!');
// more Detailes for events
// https://nodejs.org/docs/latest-v8.x/api/events.html