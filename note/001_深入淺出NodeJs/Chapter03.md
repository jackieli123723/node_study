# IO & �B��
* �q�`�i����B�@
* �P�B IO �|�ɭP CPU ���� IO ����
* OS Kernel �u�� Blocking/Non Blocking IO 
     * Blocking IO �|���� Kernel �����Ҧ��ާ@�~�|��^
     * Non Blocking IO �|��I�s��ߧY��^�@�Ӿާ@�X, �Ӥ��|���ݾާ@����
        * Polling : �ϥξާ@�X�߰ݪ��A
            * read : ����߰ݬO�_����ƥiŪ��
            * select: �ϥΨƥ󪬺A�P�_�O�_����ƥiŪ��, ���� 1024 �Өƥ󭭨�
            * poll : �ѨM select ���� 1024 �Өƥ�
            * epoll : Linux �U��{, �����˴��O�_�� IO�ƥ�, �p�G���h�q��, �S���h��v, ���|���O CPU �i��ۨ�
            * kqueue : FreeBSD �U��{, ���� epoll
            
![�I�sBlocking IO�L�{](fig3-2.jpg)

![�I�sNon Blocking IO�L�{](fig3-3.jpg)

![�I�s read �L�{](fig3-4.jpg)

![�I�s select �L�{](fig3-5.jpg)

![�I�s poll �L�{](fig3-6.jpg)

![�I�s epoll �L�{](fig3-7.jpg)


# �D�P�B IO
* *nix: libeio �ϥ� Threading Pool + Blocking IO ����
* windows: iocp, �����٬O�� Threading Pool ��{
* libuv ��H�� windows �M *nix ���D�P�B IO �I�s

![�D�P�B IO �ܷN��](fig3-1.jpg)

![�D�P�B IO](fig3-9.jpg)

![����D�P�B IO �L�{](fig3-13.jpg)

# Node ����ҫ�-�ƥ�j��
* �C����@���j��L�{�٬� Tick
* 

![Tick](fig3-11.jpg)

# setTimeout/setInterval/process.nextTick/setImmediate
* setTimeout/setInterval �����
* �n�D�P�B�ߧY����@�Ӿާ@��ĳ�ϥ� process.nextTick

## process.nextTick vs setImmediate
* process.nextTick
    * idle �[���
* setImmediate
    * check �[���
* �ƥ�j���[����ˬd���� : idle > io > check

```
console.log(process.versions.node);
process.nextTick(function(){
    console.log('tick #1');
});
process.nextTick(function(){
    console.log('tick #2');
});

setImmediate(function(){
    console.log('setImmediate #1');
    
    process.nextTick(function(){
        console.log('tick #3');
    });
});

setImmediate(function(){
    console.log('setImmediate #2');
});

result:
6.2.1
tick #1
tick #2
setImmediate #1
setImmediate #2
tick #3
```

# Server �ҫ�
* �P�B : �C���u��B�z�@�ӽШD, ��l�ШD����
* �C�ӽШD�@�� Process: �i�B�z�h�ШD, ���t�θ�T����, ����i�X�i��
* �C�ӽШD�@�� Thread: �C�ӽШD�ӥθ귽�� Process �C, �j�q�õo�ШD�����~�V
* �ƥ��X��: �C�ӽШD�O�@�ӫD�P�B IO 
    * nginx
    * ruby - event machine
    * perl - Any Event
    * python - twisted
    * Lua - luavit