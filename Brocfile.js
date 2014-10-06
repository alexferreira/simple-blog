/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  'ember-cli-bootstrap': {
    'importBootstrapJS': true
  }
});

module.exports = app.toTree();
