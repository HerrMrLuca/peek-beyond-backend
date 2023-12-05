/**
 * category controller
 */

import {factories} from '@strapi/strapi'

export default factories.createCoreController('api::category.category', ({strapi}) => ({
    async findLatest(ctx) {
      const projects = await strapi.entityService.findMany('api::project.project', {
          populate: {
            // https://www.youtube.com/watch?v=F1f7LctorXQ
            //TODO
          }
        }
      );

      ctx.body = projects;
    },
  })
);
