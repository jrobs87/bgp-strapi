'use strict';

/**
 * microsite controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::microsite.microsite');
