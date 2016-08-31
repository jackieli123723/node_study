const x2j = require('xml2js');

function basic_base(){
    let xml = `<xml>
        <swordman>
            <name type="str">Arick</name>
            <level type="int">99</level>
            <items>
                <item>sword</item>
                <item>shield</item>
            </items>
        </swordman>
    </xml>`;
    x2j.parseString(xml, (err, jd)=>{
        console.log(JSON.stringify(jd));
    });
}

function  bad_case(){
    let bad_xml = `<xml>123`;
    x2j.parseString(bad_xml, (err, jd)=>{
        console.log(err);
    });
}
    
function main(){
    basic_base();
}

main();