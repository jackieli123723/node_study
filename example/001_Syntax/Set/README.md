
### Set
* �@��Set���|�]�t�ۦP����
* Set�O�i�H�]�tJS�������������Ȫ�
* Set���ണ�Ѫ��h�O����
* Set �u�� has �ˬd�����O�_�s�b
// Sets 
var s = new Set();
s.add("hello").add("goodbye").add("hello");
s.size === 2;
s.has("hello") === true;

#### ��k
new Set�G�Ыؤ@�ӷs���B�Ū�Set�C
new Set(iterable)�G�q����i�M��ƾڤ����������A�c�y�X�@�ӷs�����X�C
set.size�G������X���j�p�A�Y�䤤�������ӼơC
set.has(value)�G�P�w���X���O�_�t�����w�����A��^�@�ӥ����ȡC
set.add(value)�G�K�[�����C�p�G�P�w�����ơA�h�����ͮĪG�C
set.delete(value)�G�R�������C�p�G�ä��s�b�A�h�����ͮĪG�C.add()�M.delete()���|��^���X�ۨ��A�ҥH�ڭ̥i�H���즡�y�k�C
set[Symbol.iterator]()�G��^�@�ӷs���M����Ӷ��X�����N���C�@��o�Ӥ�k���|�Q�����եΡA�]����ڤW�N�O���϶��X����Q�M���A�]�N�O���A�ڭ̥i�H�����gfor (v of set) {...}�����C
set.forEach(f)�G�����ΥN�X�Ӹ����n�F�A���N���Ofor (let value of set) { f(value, value, set); }��²�g�A������Ʋժ�.forEach()��k�C
set.clear()�G�M�Ŷ��X�C
set.keys()�Bset.values()�Mset.entries()��^�U�ح��N���A���̬O���F�ݮeMap�Ӵ��Ѫ��A�ҥH�ڭ̫ݷ|��A�ӬݡC

### WeakSet
* WeakSet�u���new�Bhas�Badd�Mdelete�C
* WeakSet���ȥ����O��H
* ���i���N

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });