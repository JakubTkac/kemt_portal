'use strict';

/**
 *  study-programme controller
 */



const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::study-programme.study-programme", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::study-programme.study-programme", query);

    return this.transformResponse(post[0]);
  },
}));





