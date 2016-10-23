const test = require('ava');

test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});

test('a1', t => {
    t.true(1 < 3);
});

test('Promise Test', t => {
    let p = new Promise( (y,n)=>{
        y(123);
    });
    return p.then(result => {
        t.is(result, 123);
    });
});