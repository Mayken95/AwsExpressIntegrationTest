const express = require("express");


const app = express();

app.set('view engine','pug');
app.set('views',__dirname + '/views');  //tambien se puede poner app.set('views', './views'); 
app.get('/', (request,response)=>{
   // response.send('Hello from server');//para enviar un texto plano
   const name = request.query.name;
   const edad = request.query.edad;
   const nacionalidad =  request.query.nacionalidad;
   const genero = request.query. genero;
   const estatura = request.query.estatura;
   const genero_text = (genero=='f')?'Femenino':'Masculino';
   const resp ={title: 'Hey' , message:'Hello!', name, edad, 
   nacionalidad, gender: genero_text, estatura}
   response.render('pug/index',resp);
});
app.listen(3000,()=>{
    console.log('Ready in port 3000!');
});

