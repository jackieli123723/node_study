/*
�r�����;� (CHARGEN) (Character Generator)

������
Port 19
�D�n�S��
�Τ�ݳz�L Socket �إ߳s�u��ӪA�ȡA�ӪA�ȷ|�ߨ�^���õL��Ҫ� ASCII �r���A����Τ�ݥD�ʵo�X�_�u�ШD
�A�α���
�}�o Socket ���ε{���ɡA�i�ΨӴ��եΤ�ݨ���A���ݤ������u�U���v�W�e�j�p�A�H�ΧQ�� Buffer �x�s�j�q��r������
�_�u�ɾ�
�Τ�ݥD�ʵo�X�_�u�n�D

http://www.faqs.org/rfcs/rfc864.html
 */
let net = require('net'),
    child_process = require('child_process'),
    cluster = require('cluster');
    
if(cluster.isMaster){    
    for(var i=0;i<=5; ++i){
        cluster.fork();
    }
    console.log('CharGen starting');
}else{
    net.createServer(function(socket) {         
        var c = 33;
        setInterval(function(){
            socket.write( String.fromCharCode(c) );
            ++c;
            if(c>126){
                c=33;
            }
        },0);
        
    }).listen(19);
}
