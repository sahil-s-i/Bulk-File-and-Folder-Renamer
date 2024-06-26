const path = require('path');
const replaceThis = "demo";
const replaceWith = "replaceddemo";
const preview = true;
const folder = path.parse(__dirname);

try {
    fs.readdir(folder, (err, data) => {
        // This will print file in the data folder 
        // console.log(data);
        
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let oldFile = path.join(folder, item);
            let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith))
            if (!preview) {
                fs.rename(oldFile, newFile, () => {
                    console.log("Renamed Successfully");
                })
            }
            else {
                console.log("data/" + item + " Will be renamed to " + newFile);
            }
        }
    })
} catch (err) {
    console.log("Error in the code");
    console.error(err);
}
