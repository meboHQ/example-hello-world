const express = require('express');
const Mebo = require('mebo');

// this example uses es6/es7 spec to make things easier to play with.
// In a production environment please consider transpiling beforehand
require('babel-register');

require('./Hello.js');

// command-line support:
// node . --cli hello --help
if (require.main === module && process.argv.includes('--cli')) {// executing cli
  const actionName = process.argv[process.argv.indexOf('--cli')];

  // creating a command-line handler which is used to load the command-line
  // arguments to the action, execute the action and to output the result back to the console
  Mebo.Handler.get('cli').init(actionName);

// web support:
// http://localhost:8080/hello?message=Hello%20World&repeat=5
}
else {
  // creating an express app
  const app = express();

  // providing Mebo's restful support
  Mebo.Handler.get('web').restful(app);

  // starting the server
  const port = process.env.PORT || 8080; // set our port
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!\n`);
  });
}
