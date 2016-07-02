var dirWalker = require('./dirTraversal');  
var fs = require('fs');  
var ee=require('events');  
var util = require('util');
var count=0;
function handleFile(path, floor,end) {  
    //setTimeout(function(){},1);
    
    var blankStr = '';  
    for (var i = 0; i < floor; i++) {  
        blankStr += '    ';  
    }  
  
    fs.stat(path, function(err1, stats) { 
        if (err1) {  
            console.log('stat error');  
        } else {  
            if (stats.isDirectory()) {  
                console.log('+' + blankStr + path);  
            } else {  
                console.log('-' + blankStr + path);  
                count++
            }  
            if(end)
        {
            console.log(count)
            console.log("end")
        }
        }  
        
    })  
    
  }  

function Walker()
{
    ee.call(this);
    //dirWalker.Traversal('./SingersPicture', 0, handleFile);
    //console.log('processing...');
    //setImmediate(finishedThing, this);
}

util.inherits(Walker, ee);
Walker.prototype.start = function() {
    var self=this;
    //setTimeout(function(){console.log("doing");},100);
    dirWalker.Traversal('./SingersPicture', 0, handleFile);
    setImmediate(this.emit.bind(this, 'finishedThing'));
    setImmediate(finished,this);
    //self.emit(finishedThing);
    console.log("processing...");
    
};
function callback(){
    console.log("cc");
}
var mt = new Walker();
mt.on('finishedThing', function () {
  console.log('Finish!');
});
mt.on('finishedThing1', function () {
  console.log('Finish1!');
});
function finished(self) {
  self.emit('finishedThing1');
}
mt.start();