const elasticsearch = require('elasticsearch');

function main(){
    let client = elasticsearch.Client({
      host: '192.168.99.100:9200'
    });

    client.search({
      index: 'books',
      type: 'book',
      body: {
        query: {
          multi_match: {
            query: 'express js',
            fields: ['title', 'description']
          }
        }
      }
    }).then(function(response) {
      var hits = response.hits.hits;
    }, function(error) {
      console.trace(error.message);
    });
}
    
main();