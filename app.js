var express = require('express');
const app = express();
var port = process.env.PORT || 3000;


app.set('view engine','ejs');
app.use(express.static('./app/public'));


app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/24482509', (req, res)=>{
    res.send("Parabéns, pode mandar o print lá no grupo e pegar seu premio");
})
app.listen(port, function(err){
    if(err) {
        console.log('não foi possivel subir o servidor');
    } else {
        console.log('SERVER LISTENING ON PORT ' + port);
    }
})