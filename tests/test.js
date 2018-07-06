"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import levelup = require('levelup');
const leveldown = require("leveldown");
const levelup2_1 = __importDefault(require("./levelup2"));
async function main() {
    // 1) Create our store
    var db = levelup2_1.default(leveldown('./mydb'));
    //console.log(db.iterator);
    await db.put('11111', '22222');
    console.log("done");
    let stream = db.createReadStream({ keys: true, values: true });
    console.log(stream.destroy);
    stream.on('data', function (data) {
        console.log('key value =', { key: String(data.key), value: String(data.value) });
    });
}
main();
//// 2) Put a key & value
//db.put('name', 'levelup', function (err) {
//    if (err) return console.log('Ooops!', err) // some kind of I/O error
//    // 3) Fetch by key
//    db.get('name', function (err, value) {
//        if (err) return console.log('Ooops!', err) // likely the key was not found
//        // Ta da!
//        console.log('name=' + value)
//    })
//})
//db.createKeyStream()
//    .on('data', function (data) {
//        console.log('key=', data)
//    })
//let stream = db.createReadStream({ keys: true, values: true });
//console.log(stream.destroy);
//stream.on('data', function (data) {
//    console.log('key value =', { key: String(data.key), value: String(data.value) });
//    stream.destroy();
//    //stream.destroy();
//});
