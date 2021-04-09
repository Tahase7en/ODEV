const EventEmitter = require('events');

// creat class

class myEmitter extends EventEmitter {}

// init object

const myemitter = new myEmitter();

// event listener

myemitter.on('event', ()=> console.log('event works...'));

// init event 
myemitter.emit('event');
myemitter.emit('event');




