/*
�C��@�y (QUOTE)

������
Port 17
�D�n�S��
�Τ�ݳz�L Socket �إ߳s�u��ӪA�ȡA�ӪA�ȷ|�ߨ�^���@�q�� (�q�`�O�@�y�W�H���L����)�A�^��������ߧY�_�u
�o�@�y�ܡA�i�ର�@��Φh���r�A���W�w���o�j�� 512 �줸��
�A�α���
�}�o Socket ���ε{���ɡA�i�ΨӨ��o���T�w�j�p����r�A�δ��զ��A���ݥD�ʵo�X�_�u�����p
�_�u�ɾ�
���A���ݥD�ʵo�X�_�u�n�D
http://www.faqs.org/rfcs/rfc865.html
 */
var net = require('net'); 
var data = [
    'Do not, for one repulse, forgo the purpose that you resolved to effort. ( Shakespeare ) ',
    'The man who has made up his mind to win will never say " Impossible".( Napoleon )',
    'Miracles sometimes occur, but one has to work terribly for them. ( C. Weizmann ) ',
    'There is no such thing as darkness; only a failure to see. ( Muggeridge ) ',
    'Time is a bird for ever on the wing. ( T. W. Robertson ) ',
    'If you do not learn to think when you are young, you may never learn. ( Edison ) ',
    'A day is a miniature of eternity. ( Emerson ) ',
    'Morality may consist solely in the courage of making a choice. ( L. Blum ) ',
    'If there were less sympathy in the world, there would be less trouble in the world. ( O. Wilde ) '
]
net.createServer(function(socket) { 
    socket.end(data[parseInt(Math.random()*data.length )]);
}).listen(17);


console.log('quote starting');