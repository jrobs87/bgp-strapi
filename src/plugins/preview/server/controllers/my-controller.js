'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('preview')
      .service('myService')
      .getWelcomeMessage();
  },
});
