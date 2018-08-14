// importing mebo
const Mebo = require('mebo');

// implementing an action that is going to print the input message
// by the number of times specified by repeat
@Mebo.register('myAction')
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


// creating instance of the action
const action = Mebo.Action.create('myAction');

// setting a message
action.input('message').setValue('Hello World!');

/*
 * uncomment the line below to test the validations.
 * That should produce an error when executing the action,
 * since the 'repeat' input excepts a number, to fix the
 * error just assign a numeric value instead.
 */
// action.input('repeat').setValue('2');

// executing action
action.run().then((result) => {
  console.log(result);

}).catch((err) => {
  console.error(err.message);
});
