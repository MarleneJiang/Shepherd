// express
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { buildMap, getRandomSeed, randomInt,makeMulti } = require('./map.js');

// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors
const cors = require('cors');
app.use(cors());

// static
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.send('Shepherd');
});

app.get('/sheep/v1/game/map_info_ex', (req, res) => {
  const map_num = randomInt(2, 6);
  const map = []
  for (let i = 0; i < map_num; i++) {
    map.push(buildMap(i + 6))
  }
  res.json({
    "err_code": 0, "err_msg": "", "data": {
      "map_md5":
        [...map],
      "map_seed": [getRandomSeed(), getRandomSeed(), getRandomSeed(), getRandomSeed()],
      "map_seed_2": "1665441542"
    }
  });
});
app.listen(port, () => {
  let string = function () {
    /* 
   _____ __               __                  __
  / ___// /_  ___  ____  / /_  ___  _________/ /
  \__ \/ __ \/ _ \/ __ \/ __ \/ _ \/ ___/ __  / 
 ___/ / / / /  __/ /_/ / / / /  __/ /  / /_/ /  
/____/_/ /_/\___/ .___/_/ /_/\___/_/   \__,_/   
               /_/                              
 */
  }
  console.log(makeMulti(string));
  console.log(`更有挑战性、更多关卡、更多图案、难度曲线更正常的羊了个羊！`);
  console.log(`-----------------------------------------------------------`);
  console.log(`请将 http://localhost:${port} 替换至FiddlerScript相应位置。`);
});