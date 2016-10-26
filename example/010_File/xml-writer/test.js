const XMLWriter = require('xml-writer');

function main(){
    let xw = new XMLWriter();
    xw.startDocument();
    xw.startElement('resources');
        xw.startElement('resource');
            xw.writeElement('title', 'blog');
            xw.writeElement('url', 'http://chuiwenchiu.wordpress.com');
        xw.endElement()
    xw.endElement();
    console.log(xw.toString());
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
