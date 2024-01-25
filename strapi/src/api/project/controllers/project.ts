/**
 * project controller
 */

import {factories} from '@strapi/strapi'

function getLocale(ctx) {
  let locale = ctx.query.locale;

  if (locale != "de" && locale != "en") {
    locale = "de"
  }
  return locale;
}

export default factories.createCoreController('api::project.project', ({strapi}) => ({

  async find(ctx) {
    let locale = getLocale(ctx);

    const projects = await strapi.entityService
      .findMany('api::project.project', {
          populate: [
            'thumbnail',
            'main_category'
          ],
          locale: locale,
        }
      );

    const publishedProjects = projects.filter(project => project.publishedAt !== null);

    ctx.body = {
      data: publishedProjects,
    };
  },

  async findLatest(ctx) {
    let locale = getLocale(ctx);

    const projects = await strapi.entityService
      .findMany('api::project.project', {
          populate: [
            'thumbnail',
            'main_category'
          ],
          locale: locale,
          orderBy: {
            createdAt: 'desc',
          },
          limit: 30,
        },
      );

    const publishedProjects = projects.filter(project => project.publishedAt !== null);

    ctx.body = {
      data: publishedProjects,
    };
  },

  async findOne(ctx) {
    const locale = ctx.query.locale;

    let project = await strapi.entityService
      .findOne('api::project.project', ctx.params.id, {
          populate: '*'
        },
      );

    if (locale === "en" && locale !== project.locale) {
      let id = project.localizations[0].id;

      project = await strapi.entityService
        .findOne('api::project.project', id, {
            populate: '*'
          },
        );
    }

    if (locale === "de" && locale !== project.locale) {
      let id = project.localizations[0].id;

      project = await strapi.entityService
        .findOne('api::project.project', id, {
            populate: '*'
          },
        );
    }

    ctx.body = {
      data: project
    };
  },

  async projectsByCategory(ctx) {
    let locale = getLocale(ctx);

    const projects = await strapi.entityService
      .findMany('api::project.project', {
          populate: {
            supervisor: true,
            degree_and_semester: true,
            main_category: true,
            thumbnail: true,
            members: true,
            gallery: true,
            sub_categories: true/* {
              filters: {
                id: {
                  $eq: ctx.params.id,
                },
              },
            }*/,
          },
          locale: locale,
          filters: {
            $or: [
              {
                main_category: {
                  id: {
                    $eq: ctx.params.id
                  }
                }
              },
              {
                sub_categories: {
                  id: {
                    $eq: ctx.params.id
                  }
                }
              }
            ]
          },
        }
      );

    const publishedProjects = projects.filter(project => project.publishedAt !== null);

    ctx.body = {
      data: publishedProjects,
    };
  },

  async projectsByMainCategory(ctx) {
    let locale = getLocale(ctx);

    const projects = await strapi.entityService
      .findMany('api::project.project', {
          populate: '*',
          locale: locale,
          filters: {
            main_category: {
              id: {
                $eq: ctx.params.id
              }
            }
          },
        }
      );
    const publishedProjects = projects.filter(project => project.publishedAt !== null);

    ctx.body = {
      data: publishedProjects,
    };
  },

  async projectsByMainCategories(ctx) {
    let result;
    let locale = getLocale(ctx);

    const categories = await strapi.entityService
      .findMany('api::category.category', {
        sort: [{
          id: 'desc'
        }]
      });

    result = categories;


    for (let i = 0; i < result.length; i++) {
      const projects = await strapi.entityService
        .findMany('api::project.project',
          {
            filters: {
              main_category: {
                id: result[i].id
              }
            },
            populate: '*',
            locale: locale,
            limit: 20
          }
        );

      //NOTE .projects löschen dann erhält man keine Category Infos mehr
      result[i]/*.projects*/ = projects.filter(project => project.publishedAt !== null);
    }

    const publishedProjects = result.filter(project => project.publishedAt !== null);

    ctx.body = {
      data: publishedProjects,
    };
  },
}));
