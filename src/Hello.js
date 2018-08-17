const Mebo = require('mebo');

// implementing/registering an action that is going to print the
// input message by the number of times specified by repeat
@Mebo.grant('cli') // <- command-line support: node . --cli hello --help
@Mebo.grant('web', {restRoute: '/hello'}) // <- web support: http://localhost:8080/hello?message=Hello%20World&repeat=5
@Mebo.register('hello')
class Hello extends Mebo.Action{
  constructor(){
    super();
    this.createInput('message: text', {elementType: 'argument'});
    this.createInput('repeat: numeric', {defaultValue: 10});
  }

  async _perform(data){
    return data.message.repeat(data.repeat);
  }
}

module.exports = Hello;
