'use strict';

/**
 * microsite router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::microsite.microsite');
