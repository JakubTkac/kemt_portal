// "use strict";
//
// /**
//  *  new controller
//  */
//
// const { createCoreController } = require("@strapi/strapi").factories;
//
// module.exports = createCoreController("api::new.new");
//


const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::new.new", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::new.new", query);

    return this.transformResponse(post[0]);
  },
}));
