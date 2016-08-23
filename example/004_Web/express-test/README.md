# ������middleware
* �@�دS����ơA���i�H�X�ݤ@��http�ШD�g������request��H�Bresponse��H�A�H�Ϊ�ܽեδ̤����U�@�Ӥ������ƪ��ޥ�
* �p�G��e�������ƨS������HTTP�ШD�A�h�����ե� next() �N����ǻ����U�@�Ӥ������ơA�_�h�ШD�|���_
* �ϥ� app.use() �[���������ơA�������ƥ[�������ǨM�w�F�������涶�ǡA�Y���[���A������

function (req, res, next) {
    next();
}

## app�Ť�����  vs router�Ť�����
* app�Ť�����A�Y�N�������Ƹj�w�� app ��H
    * �q�L app.use() �Ϊ� app.METHOD() ��k
* router�Ť�����j�w��express.Router() ��H
    * �q�L router.use() �Ϊ� router.METHOD() ��k
    
# class : Request
* req.get() : �� header
* req.body : �� post body, �ݭn�ɧU�ĤT��module�A�p body-parser �M multer 
* req.query : ���d�߰Ѽ�
* req.params : �����|�Ѽ�

# class :Response
* res.status() : �]�m���A�X
* res.json() : ��^ json 
* res.send() : �o�eHTTP�T���H���A�Ѽƥi�H�O�r�Ŧ�B�ƲաBBuffer��H���A�|�ھڰѼƪ������۰ʳ]�mheader�� Content-Type 
* res.set() : �]�mHTTP��header�H��
* res.render() : �ϥμҪO������V����

# �R�A�ɮ׳B�z
* [Serving static files in Express](http://expressjs.com/en/starter/static-files.html)

# �^�� json
* [node.js - Proper way to return JSON using node or Express - Stack Overflow](http://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express)

# http post
* [javascript - How to retrieve POST query parameters in Express - Stack Overflow](http://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters-in-express)

# �B�z�ɮפW��
* [�ϥ�express 4����{���W�� - �����Ϥ� - �իȶ�](http://www.cnblogs.com/duhuo/p/4779408.html)

# Session
* [express4.x ��session�ϥ� - ²��](http://www.jianshu.com/p/feed054f39c9)

# TLS
* [Adding HTTPS (SSL) to Express 4.X Applications - Ayan Ray](http://blog.ayanray.com/2015/06/adding-https-ssl-to-express-4-x-applications/)
* [express4_SSL_example/app.js at master �P ayanray/express4_SSL_example �P GitHub](https://github.com/ayanray/express4_SSL_example/blob/master/app.js)

## �����Ү�
openssl genrsa 1024 > config\private.key
openssl req -new -key config\private.key -out config\cert.csr
openssl x509 -req -in config\cert.csr -signkey config\private.key -out config\certificate.pem

# �����A��
* [Node.js Hints, Graceful server shutdown with Node.js and Express](http://glynnbird.tumblr.com/post/54739664725/graceful-server-shutdown-with-nodejs-and-express)
* [How do I programmatically shut down an instance of ExpressJS for testing? - Stack Overflow](http://stackoverflow.com/questions/8659011/how-do-i-programmatically-shut-down-an-instance-of-expressjs-for-testing)

# �ѦҸ��
* [Express 4.x - API Reference](http://expressjs.com/en/api.html)
* [�z��Express��middleware](http://my.oschina.net/qiaotoubao/blog/735675)
