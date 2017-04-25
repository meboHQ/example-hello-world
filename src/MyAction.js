const Mebo = require('mebo');


class MyAction extends Mebo.Action{
  constructor(){
    super();
    this.createInput('message: text');
    this.createInput('repeat: numeric', {defaultValue: 10});
  }

  _perform(data){
    const result = data.message.repeat(data.repeat);
    return Promise.resolve(result);
  }
}

// registering action
Mebo.registerAction(MyAction);
