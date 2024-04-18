const fs = require('fs');
const replaceThis = "demo";
const replaceWith = "replaceddemo";

try {
    fs.readdir("data", (err, data) => {
        console.log(data);
        fs.rename("data/" + item , newFile)
    })
} catch (err) {
    console.error(err);
}
