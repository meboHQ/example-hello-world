const Mebo = require('mebo');


// creating the action
const action = Mebo.createAction('myAction');

// setting a message
action.input('message').setValue('Hello World!');

/*
 * uncomment the line bellow to test the validations.
 * That should produce an error when executing the action,
 * since the 'repeat' input excepts a number, to fix the
 * error just assign a numeric value instead.
 */
// action.input('repeat').setValue('2');

// executing action
action.execute().then((result) => {
  console.log(result);

}).catch((err) => {
  console.error(err.message);
});
