function array_to_map(){
    let myMap = new Map()
        .set(true, 7)
        .set({foo: 3}, ['abc']);
    console.log(myMap);
    
    console.log(new Map([[true, 7], [{foo: 3}, ['abc']]]));
}

function mapToJson(map) {
        return JSON.stringify([...map]);
}

function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
}
    
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        // We don't escape the key '__proto__'
        // which can cause problems on older engines
        obj[k] = v;
    }
    return obj;
}

function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}

function strMapToJson(strMap) {
        return JSON.stringify(strMapToObj(strMap));
}

function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
}

module.exports = {
    jsonToStrMap: jsonToStrMap,
    strMapToJson:strMapToJson,
    objToStrMap:strMapToJson,
    strMapToObj:strMapToObj,
    jsonToMap:jsonToMap,
    mapToJson:jsonToMap
};
function main(){
    // array_to_map();
    
    // let json = mapToJson( new Map([[true, 7], [{foo: 3}, ['abc']]]) );
    // console.log(json);
    // let map = jsonToMap(json);
    // console.log(map);
    
    // let obj = strMapToObj(new Map().set('yes', true).set('no', false));
    // console.log(obj);
    // let map2 = objToStrMap({yes: true, no: false});
    // console.log(map2);
    
    console.log(strMapToJson(new Map().set('yes', true).set('no', false)));
    console.log(jsonToStrMap('{"yes":true,"no":false}'));
}

if (require.main === module) {
    main();
}