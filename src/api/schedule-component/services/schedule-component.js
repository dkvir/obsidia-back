'use strict';

/**
 * schedule-component service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::schedule-component.schedule-component');
