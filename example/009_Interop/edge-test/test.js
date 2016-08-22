const edge = require('edge');

function basic_example(){
    let hello = edge.func(
      `
      async (input) => { 
        return ".NET welcomes " + input.ToString(); 
      }
      `
    );

    hello('Node.js', function (error, result) {
      if (error) throw error;
      console.log(result);
    });
}

// SET EDGE_USE_CORECLR=1
function call_dll(){
    let helloDll = edge.func({
      assemblyFile: __dirname + "\\Echo\\bin\\Debug\\netstandard1.6\\Echo.dll",
      typeName: "Example.Greetings",
      methodName: "Greet"
    });
    helloDll('hello', (err, result)=>{
        console.log(result);
    });
}


function main(){
    // basic_example();
    call_dll();
}
    
main();