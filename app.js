var express = require('express');
const app = express();
var port = process.env.PORT || 3000;
const number = require('number-generator');


app.set('view engine','ejs');
app.use(express.static('./app/public'));


app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/24482509', (req, res)=>{
    let last_code = number.aleaRNGFactory(1234);
    res.send(`Aqui está seu ultimo código, falta pouco ${last_code}`);
})
app.listen(port, function(err){
    if(err) {
        console.log('não foi possivel subir o servidor');
    } else {
        console.log('SERVER LISTENING ON PORT ' + port);
    }
})