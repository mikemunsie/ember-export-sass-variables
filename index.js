'use strict';
const exportSass = require('./lib/exportSass');

module.exports = {
  name: 'ember-export-sass-variables',

  included(parent) {
    this._super.included.apply(this, arguments);

    // Get the top most parent
    while (!this.app && parent) {
      if (parent.app) {
        this.app = parent.app;
      } else {
        parent = parent.parent;
      }
    }

    // https://github.com/aexmachina/ember-cli-sass/issues/171
    // You get this deprecation warning, but we shouldn't see this in an addon
    if (!parent.options.sassOptions) {
      parent.options.sassOptions = {};
    }
    if (!parent.options.sassOptions.functions) {
      parent.options.sassOptions.functions = {};
    }
    Object.assign(parent.options.sassOptions.functions, exportSass(`${__dirname}/addon/utils`));
  },
};
