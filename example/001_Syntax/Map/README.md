* [Converting ES6 Maps to and from JSON](http://www.2ality.com/2015/08/es6-map-json.html)
* https://ponyfoo.com/articles/es6-weakmaps-sets-and-weaksets-in-depth


## Map/WeakMap
* [�`�J�L�XES6�]�Q�^�G���X](http://www.linuxeden.com/html/news/20150919/162916.html)
* https://github.com/WebReflection/es6-collections

### Map
* �ѭY�z��ȹ�զ�

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.get(s) == 34;

#### ��k
new Map�G��^�@�ӷs���B�Ū�Map�C
new Map(pairs)�G�ھکҧt�����Φp[key, value]���Ʋ�pairs�ӳЫؤ@�ӷs��Map�C�o�̴��Ѫ�pairs�i�H�O�@�Ӥw����Map ��H�A�i�H�O�@�ӥѤG���Ʋղզ����ƲաA�]�i�H�O�v�ӥͦ��G���Ʋժ��@�ӥͦ����A�����C
map.size�G��^Map�����ت��ӼơC
map.has(key)�G���դ@����W�O�_�s�b�A����key in obj�C
map.get(key)�G��^�@����W�������ȡA�Y��W���s�b�h��^undefined�A����obj[key]�C
map.set(key, value)�G�K�[�@��s����ȹ�A�p�G��W�w�s�b�N�л\�C
map.delete(key)�G����W�R���@���A����delete obj[key]�C
map.clear()�G�M��Map�C
map[Symbol.iterator]()�G��^�M���Ҧ��������N���A�C���Τ@����M�Ȳզ����G���Ʋժ�ܡC
map.forEach(f) ����for (let [key, value] of map) { f(value, key, map); }�C�o�̸޲����Ѽƶ��ǡA�MSet���@�ˡA�O������Array.prototype.forEach()�C
map.keys()�G��^�M���Ҧ��䪺���N���C
map.values()�G��^�M���Ҧ��Ȫ����N���C
map.entries()�G��^�M���Ҧ��������N���A�N��map[Symbol.iterator]()�C��ڤW�A���̴N�O�P�@�Ӥ�k�A���P�W�r�C

### WeakMap
* WeakMap�u���new�Bhas�Bget�Bset �Mdelete�C
* WeakMap���䥲���O��H
* ���i���N

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined
