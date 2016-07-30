const UDPChatClient = require('./UDPChatClient').UDPChatClient;
const commandLineArgs = require('command-line-args');
const optionDefinitions = [
  { name: 'name', alias: 'n', type: String }
];
const options = commandLineArgs(optionDefinitions);
console.log(options);
if(options['name']){
    new UDPChatClient(options['name']);
}
