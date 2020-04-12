const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const naiveBayes = require('./naive-bayes/nb.js');
const types = require('./res/concrete.resources');
const path = require('path');


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(bodyParser.json({limit: '5mb', extended: true}));
app.use(express.static(path.join(__dirname, 'client')));

app.get('/', async (req, res) => {
   res.sendFile(__dirname + '/client/');
});

app.post('/api/getResult', async (req, res) => {
   let packet =  {
      Where: req.body.where,
      Who: req.body.who,
      Weapon: req.body.weapon 
   }
   let result = await naiveBayes('./res/kills.csv', 'firstHalf', packet);
   console.log(result);
   return res.json(result);
});

app.get('/api/choices', async (req, res) => {
   return res.json({
      where: types.getLoctions(),
      who: types.getPersona(),
      weapon: types.getWeapon() 
   });
});

app.listen(3000);
console.log('running on 3000');
