# �إ� NPM �ܮw
* [source code](http://github.com/isaacs/npmjs.org)
* �ϥ� CouchDB DB
* NPM �ܮw = registry(�x�s�ҲծM����+JSON api) + www(����)

## �B�J
1. �w�� Erlang
2. CouchDB
3. �إ� npm ��Ʈw
curl -X PUT http://127.0.0.1:5984/registry

4. ��� npm �ܮw��l�X
git clone https://github.com/isaacs/npmjs.org.git

5. ���o�w�ˤu��
npm install couchapp semver

6. ���J npm �ܮw�{���X�� CouchDB
couchapp push registry/app.js http://127.0.0.1:5984/registry
couchapp push www/app.js http://127.0.0.1:5984/registry

6. ����
http://127.0.0.1:5984/registry/_design/ui/_rewrite
http://127.0.0.1:5984/registry/_design/scratch/_rewrite

## mirror �ܮw
npm install replicate
replicate [source] [target]

## private �ܮw
* �s��S�w�M��b����

npm install sync_package
sync_package [package]

