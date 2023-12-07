/**
 * project controller
 */

import {factories} from '@strapi/strapi'

export default factories.createCoreController('api::project.project', ({strapi}) => ({
  async findLatest(ctx) {
    const projects = await strapi.entityService.findMany('api::project.project', {
        populate: [
          // https://www.youtube.com/watch?v=F1f7LctorXQ
          'thumbnail'
        ]
      }
    );

    ctx.body = projects;
  },
  async findOne(ctx) {
    console.log(ctx.params.id)
    const project = await strapi.entityService.findOne('api::project.project', ctx.params.id, {
        populate: '*'
      }
    );

    ctx.body = project;
  }
}));
