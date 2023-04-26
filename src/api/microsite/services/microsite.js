'use strict';

/**
 * microsite service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::microsite.microsite');
