/*
�^���A�� (Echo)

������
Port 7
�D�n�S��
�Τ�ݳz�L Socket �ǰe����r���ӪA�ȡA�ӪA�ȷ|�ߨ�^���P�Τ�ݿ�J�r��@�Ҥ@�˪����e��Τ��
�_�u�ɾ�
�Τ�ݥD�ʵo�X�_�u�n�D
�A�α���
�i�ΨӴ��պ����O�_���`�s�u�A�]�i�ΨӺʱ������O�_�_�u�C
�}�o Socket ���ε{���ɡA�i�ΨӴ��եΤ�ݻP���A���ݩ������ʪ����p
*/
var net = require('net'); 
net.createServer(function(socket) { 
    socket.on('data', function(buffer) { 
        socket.write(buffer);
    });
    
}).listen(7);


console.log('echo starting');