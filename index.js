const path = require('path');
const replaceThis = "demo";
const replaceWith = "replaceddemo";
const preview = true;
const folder = path(__dirname)

try {
    fs.readdir(folder, (err, data) => {
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let newFile = "data/" + item.replaceAll(replaceThis, replaceWith)
            if(!preview){
                fs.rename("data/" + item, newFile , ()=>{
                    console.log("Renamed Successfully");
                })
            }
            else{
                console.log("data/" + item + " Will be renamed to " + newFile );
            }
        }
    })
} catch (err) {
    console.error(err);
}
