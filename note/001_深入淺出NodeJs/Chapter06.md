# Buffer
* Buffer �O�@�ب嫬���X js �M c++ ���Ҳ�
    * �D�ʯ�����ϥ� c++ ��{ 
* �L�� require �N�ઽ���ϥ�
* �����x�s�� 0-255 ���ƭ�
    * �p�G�p�� 0, ����֥[ 256 ����Ȥ��� 0-255
    * �p�G�j�� 255, ����� 256 ����Ȥ��� 0-255
* new Buffer('�A�n', 'utf-8');
* �O������t���O�� v8 �� heap, �ӬO C++ �h�����t�m
    * stab ���t����
        * stab �O�T�w�j�p(8KB)�w�t�m�϶�
        * ���A�Ϥ��� full(�������t), partial(�������t), empty(�����t)
        * �H 8KB �@�����ɰϤ��j�����٬O�p����
        * �p����|�@�� stab ����Ŷ��Ӻ�, �p�G��ӳs��p�����`�M�j��8KB, �h�Ĥ@�Ӫ��� stab �Ŷ��|���O, �t�m�̦n�H 8K �������קK stab ���O
        * �j���󪽱��t�m���w�j�p�� stab ���@��
        
# �s�X�ഫ
* �䴩�s�X
    * ASCII
    * UTF-8
    * UTF-16LE/UCS-2
    * Base64
    * Binary
    * Hex
* Buffer.isEncoding(encoding) : �ˬd�s�X�O�_���ؤ䴩
* �䴩�D���ؽs�X
    * iconv : c++ libconv ��{
    * iconv-lite : �� js ��{

## string to Buffer
* new Buffer(str, encoding)
* buf.write(str, offset, len, encoding)

## Buffer to string
* buf.toString(encoding, start, end)

## StringDecoder �ѨM�s�X���D
* �䴩 UTF-8, Base64, UCS-2/UTF-16LE

## Buffer �걵
* ���ӥ���Ҧ� buffer �s��b array, �̫�A�� Buffer.concat �X�֦����� Buffer

## �ʯ�
* �����ܦh���ϥ� Buffer �i��B�z�P�ǿ�, �w���ഫ�� Buffer �í��ƨϥΥi��֤����ഫ�ɶ�
* fs.createReadStream �� highWaterMark �ﶵ�Ω���w�C��Ū��������
    * �v�T�O����t�m
    * �v�TŪ������