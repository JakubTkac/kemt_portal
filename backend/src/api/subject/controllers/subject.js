'use strict';

/**
 *  subject controller
 */



const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::subject.subject", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::subject.subject", query);

    return this.transformResponse(post[0]);
  },
}));

