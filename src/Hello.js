const Mebo = require('mebo');

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

module.exports = Hello;
