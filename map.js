const crypto = require('crypto');
const fs = require('fs');

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getMD5FromTxt(path) {
  const buffer = fs.readFileSync(path);
  const fsHash = crypto.createHash('md5');
  fsHash.update(buffer);
  const md5 = fsHash.digest('hex');
  return md5;
}

function writeTxt(path, data) {
  fs.writeFileSync(path, data);
}
function fileRename(oldPath, newPath) {
  fs.renameSync(oldPath, newPath);
}
function buildMap(mode) {
  let map = {}
  map.levelKey = randomInt(0, 99999)
  map.levelData = {}
  map.blockTypeData = {}
  // const width_ = 4
  // const height_ = 6
  // const heigh__ = 3
  // const layer_heigh = 20
  const heightNum = randomInt(10, 16)
  const widthNum = randomInt(6, 12)
  map.heightNum = heightNum
  map.widthNum = widthNum
  //最后一列modeType=2

  let block_all_num = randomInt(6, mode) * 3
  let layer_block_num = []
  while (block_all_num != 0) {
    const block_num = randomInt(1, 9)
    if (block_all_num >= block_num) {
      layer_block_num.push(block_num)
      block_all_num -= block_num
    } else {
      layer_block_num.push(block_all_num)
      block_all_num = 0
    }
  }
  for (let i = 0; i < layer_block_num.length; i++) {
    map.levelData[(i + 1).toString()] = []
    map.blockTypeData[(i + 1).toString()] = 1//randomInt(1,2)
    for (let j = 0; j < layer_block_num[i]; j++) {
      const rolNum = randomInt(16, 40)
      const rowNum = randomInt(16, 49)
      const block = {
        "type": 0,
        "modeType": j >= layer_block_num[i] - 2 ? 2 : 1,
        "layerNum": i + 1,
        "blockNode": null,
        rolNum,
        rowNum,
        "id": (i + 1).toString() + "-" + (rolNum).toString() + "-" + (rowNum).toString(),
      }
      map.levelData[(i + 1).toString()].push(block)
    }
  }
  writeTxt('./public/map.json', JSON.stringify(map))
  const md5 = getMD5FromTxt('./public/map.json')
  fileRename('./public/map.json', `./public/${md5}.txt`)
  return md5
}

// 随机生成9位随机数
function getRandomSeed() {
  const seed = randomInt(0, 999999999)
  return seed
}

function makeMulti(string) {
  let l = new String(string)
  l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"))
  return l
}

module.exports = {
  buildMap,
  getRandomSeed,
  randomInt,
  makeMulti
}
