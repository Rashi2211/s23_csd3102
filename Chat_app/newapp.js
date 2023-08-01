// Import the e v e n t s module
const events = require('events');
// Create an instance of the EventEmitter class
const myEmitter = new events.EventEmitter();
// Define a custom event and an associated listener
myEmitter.on('greet',function(data){
    console.log(`Hello, ${data}!`);
});

// Emit the custom event
myEmitter . emit ('greet','World ' ) ;