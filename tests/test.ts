//import levelup = require('levelup');
import leveldown = require('leveldown');
import levelup from "../index"

async function main() {
    // 1) Create our store
    var db = levelup(leveldown('./mydb'));
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




