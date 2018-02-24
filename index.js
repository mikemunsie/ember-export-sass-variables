'use strict';
const exportSass = require('./lib/exportSass');
const findHost = require('./lib/findHost');

module.exports = {
  name: 'ember-export-sass-variables',

  included(parent) {
    this._super.included.apply(this, arguments);
    let host = findHost(parent);

    if (!host) {
      host = parent;
    }

    // https://github.com/aexmachina/ember-cli-sass/issues/171
    // You get this deprecation warning, but we shouldn't see this in an addon
    if (!host.options.sassOptions) {
      host.options.sassOptions = {};
    }

    if (!host.options.sassOptions.functions) {
      host.options.sassOptions.functions = {};
    }

    Object.assign(host.options.sassOptions.functions, exportSass(`${__dirname}/addon/utils`));
    return parent;
  },
};
