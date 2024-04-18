const fs = require('fs');
const replaceThis = "demo";
const replaceWith = "replaceddemo";

try {
    fs.readdir("data", (err, data) => {
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let newFile = "data/" + item.replaceAll(replaceThis, replaceWith)
            fs.rename("data/" + item, newFile , ()=>{
                console.log("Renamed Successfully");
            })
        }
    })
} catch (err) {
    console.error(err);
}
