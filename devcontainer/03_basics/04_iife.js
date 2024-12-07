// Immediately Invokedn Function Expressions (IIFE)

(function(){
    console.log(`DB CONNECTED`);
    
})();

(()=>{
    console.log(`DB CONNECTED`);
})();

((name)=>{
    console.log(`DB CONNECTED ${name}`);
})("malik")