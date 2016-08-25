const cheerio = require('cheerio');
let d = cheerio.load(`
<div id="a">
    <div class="row row-1">ROW#1</div> 
    <div class="row row-2" level="99">ROW#2</div> 
    <div class="row">
        <span>#1</span>
        <span>#2</span>
    </div>
</div>
`);
console.log(d('#a .row-1').text());
console.log(d('#a .row[level=99]').text());
d('#a > div >span').each( (idx, el)=>{
    console.log(`#${idx}: ${d(el).text()}`);
});