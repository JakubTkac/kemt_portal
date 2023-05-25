const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::employee.employee", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::employee.employee", query);

    return this.transformResponse(post[0]);
  },
}));


