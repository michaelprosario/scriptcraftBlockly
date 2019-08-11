const express = require('express')
const app = express()
const port = 3000
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

const ScriptsRepository = require('./scripts_repository.js');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'))

const repo = new ScriptsRepository();

app.get('/', (req, res) => {
    var response = repo.getAll();
    res.render('list_scripts', response);
})

app.get('/edit/:script_name', (req, res) => {
    var scriptName = req.params.script_name;
    scriptName = scriptName.substring(0, scriptName.length - 3);
    var response = repo.read(scriptName);
    res.render('edit_script', response);
})

app.get('/new', (req, res) => {
    var response = {
        jsCode: '', blocklyXml: '', name: ''
    };
    
    res.render('edit_script', response);
})

app.post('/save_js', function(req, res) {
    var response = repo.save(req.body);
    res.send(response);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));