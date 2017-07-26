var port=8010;
const  express=require('express');
app=express();
app.use('/',express.static(__dirname));
app.listen(port);
console.log('Now serving http://127.0.0.1:'+port);