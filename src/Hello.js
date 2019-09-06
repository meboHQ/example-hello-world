const Mebo = require('mebo');
const express = require('express');

// implementing/registering an action that is going to print the
// input message by the number of times specified by repeat
@Mebo.grant('cli')
@Mebo.grant('web', {restRoute: '/hello'})
@Mebo.register('hello')
class Hello extends Mebo.Action{
  constructor(){
    super();

    // inputs
    this.createInput('message: text', {defaultValue: "Hello, World!", elementType: 'argument'});
    this.createInput('repeat: numeric', {defaultValue: 1, min: 1, max: 100});
  }

  async _perform(data){
    // result
    return data.message.repeat(data.repeat);
  }
}

// Command-line support:
// node . --help
// node . hello --help
// node . hello "Ola Mundo!"
// node . hello --repeat=5 "Ola Mundo!"
const cli = Mebo.Handler.get('cli');
if (cli.isSupported()){
  cli.init();
}
// Web support:
// node .
// http://localhost:8080/hello
// http://localhost:8080/hello?message=Ola%20Mundo
// http://localhost:8080/hello?message=Ola%20Mundo&repeat=5
else{
  const app = express();

  // providing Mebo's restful support
  Mebo.Handler.get('web').restful(app);

  // starting the server
  const port = process.env.PORT || 8080; // set our port
  app.listen(port, () => {
    console.log(`listening on port ${port}!\n`);
  });
}
