/*
����ɶ��A�� (Daytime)

������
Port 13
�D�n�S��
�Τ�ݳz�L Socket �إ߳s�u��ӪA�ȡA�ӪA�ȷ|�ߨ�^�����A���W���ثe�ɶ��A�^��������ߧY�_�u
�A�α���
�i�ΨӨ��o���A���W�ثe������ɶ�
�}�o Socket ���ε{���ɡA�i�ΨӨ��o���A���ɶ��A�δ��զ��A���ݥD�ʵo�X�_�u�����p
�_�u�ɾ�
���A���ݥD�ʵo�X�_�u�n�D
���դ�k
�z�L telnet �u��{���s�W������ Port 13
��ݨ����A���^��������ɶ��r���|�ߧY�_�u 
*/
var net = require('net'); 
net.createServer(function(socket) { 
    socket.end( (new Date()).toString());
}).listen(13);


console.log('DayTime starting');