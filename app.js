var express = require('express');
const app = express();
var port = process.env.PORT || 3000;
const number = require('number-generator');


app.set('view engine','ejs');
app.use(express.static('./app/public'));


app.get('/', (req, res)=>{
    res.render('index', {message: "nordico"})
})

app.get('/24482509', (req, res)=>{
    let last_code = number.aleaRNGFactory(1234);
    console.log(last_code)
    res.send(`Aqui está seu ultimo código ${last_code.uInt32()}, falta pouco.`);
})

app.get('/25092448', (req, res)=>{
    let last_code = number.aleaRNGFactory(1234);
    res.render(`message`, {message: `parabéns esse é o verdadeiro codigo 25501234, falta pouco.`});
})

app.get('/25501234', (req, res)=>{
    res.render("card/index");
})

app.post("/response", (req, res)=>{
    res.json({response: "nordico"});
})

app.get("/warg", (req, res)=>{
    res.render("warg");
})

app.listen(port, function(err){
    if(err) {
        console.log('não foi possivel subir o servidor');
    } else {
        console.log('SERVER LISTENING ON PORT ' + port);
    }
})