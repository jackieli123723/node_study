const officegen = require('officegen'),
      fs = require('fs');
      
function create_xlsx(){
    let xlsx = officegen('xlsx');
    xlsx.name = 'excel name';
    let sheet = xlsx.makeNewSheet();
    sheet.data[10] = [];
    sheet.data[10][2] = 'hello';
    sheet.setCell('G8', 'xlsx');
    xlsx.generate( fs.createWriteStream('test.xlsx'));
}

function create_pptx(){
    let pptx = officegen('pptx');
    pptx.setDocTitle('Hello pptx');
    let slide = pptx.makeNewSlide();
    slide.back ='000000';
    slide.color = 'ffffff'
    slide.addText('Arick "^o^"', {
        color: 'ff00ff',
        bold: true,
        font_size: 48,
        font_face: 'Artal',
        x: 'c', // align to center
        y: 'c', // align to center
        cx: 300,
        cy: 400
    });
    pptx.generate( fs.createWriteStream('test.pptx'));
}

function create_docx(){
    let docx = officegen('docx');
    let p = docx.createP();
    p.options.align = 'center';
    p.addText('Hello docx', {
        color: 'ffff00',
        bold: true,
        underline: true,
        font_face: 'Artal',
        font_size: 48
    });
    docx.generate( fs.createWriteStream('test.docx'));
}
    
function main(){
    // create_docx();
    // create_pptx();
    create_xlsx();
}

main();