
# �w�� StrongLoop
npm install -g strongloop

# slc (StrongLoop CLI)

## �إ� loopback ����

slc loopback

### �ؿ����c

```
+ client
+ server
    + boot
    - config.json
    - server.js
+ node_modules
- package.json
- README.md
- .yo-rc.json

```

#
loopback cmd:
slc loopback ��l�ƶ���

slc loopback:datasource

slc loopback:model

slc loopback:relation

slc loopback boot-script

others:deploy and status
slc deploy http://usr:pwd  @localhost :port

slpmctl -C http://usr:pwd  @localhost :8701 ls

slpmctl -C http://usr:pwd  @domain :8701 status

pm2 start -n weather app.js

pm2 start -n app_update_server server.js