import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"

inquirer.prompt([
    {
    message :"Type a url:",
    name:"URL"
    }

]).then((answers)=>{
    const url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('message.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
}).catch((err)=>{
    if(error)
    {
        console.log(err)
    }
})