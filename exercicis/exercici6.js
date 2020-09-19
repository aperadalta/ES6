var original = `function b() {
    // ...
 }
 funtion a() {
    b().then() = > {
    doMoreWork();
    }
 }`



var sol = `function b() {
    // ...
}

async function a() {
    try{
        const c = await b();
    }catch{
        alert(err);
    }
 }`

 export {original, sol};