# �ШD��k
* req.method

# ���|�ѪR
* url.parse()

# GET �Ѽ�
* querystring.parse()
* url.parse(url, true).query

# Cookie
* RFC 2109
* RFC 6265
* req.headers.cookie
* �ﶵ
    * path : �@�θ��|
    * Expire, Max-Age: ���Įɶ�
    * HttpOnly : �u�� Http Request �L�{�|�e�X, ��L�y�{�L�k�s��
    * Secure: true �ɪ�ܭ��Ω� https
    
# Session
* �u�s�b Server, Client �L�k�ק�

# Form Post ���
* x-www-form-urlencoded
    * querystring.parse(req.rawBody);
* XML
    * �i�� xml2js module
* �ɮפW��
    * �i�� formidable module
    * ����W�Ǫ���ƪ���
        * �ˬd content-length
        * �ˬd��ڦ��쪺��ƪ��׬O�_�W�L���\�d��
        
# BigPipe
* ���������\�h�p����(pagelet), ����X�S����ƪ��ج[, �A�v�B��X�C�Ӥp������e��, �̫�b��R��ج[��
* �����X <script></script> ���t js �}��, �ϫe�ݨ̾ګ����X����ƶi���Ƹɦ^

# framework
* express
* koa
