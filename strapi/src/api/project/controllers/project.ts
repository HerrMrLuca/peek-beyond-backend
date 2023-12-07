/**
 * project controller
 */

import {factories} from '@strapi/strapi'

export default factories.createCoreController('api::project.project', ({strapi}) => ({

    async find(ctx) {
        const projects = await strapi.entityService
            .findMany('api::project.project', {
                    populate: [
                        'thumbnail'
                    ],
                }
            );

        ctx.body = {
            data: projects
        };
    },
    async findLatest(ctx) {
        const projects = await strapi.entityService
            .findMany('api::project.project', {
                    sort: {
                        createdAt: 'desc'
                    },
                    populate: [
                        'thumbnail'
                    ],
                    limit: 30
                }
            );

        ctx.body = {
            data: projects
        };
    },

    async findOne(ctx) {
        console.log(ctx.params.id)
        const project = await strapi.entityService
            .findOne('api::project.project', ctx.params.id, {
                    populate: '*'
                }
            );

        ctx.body = {
            data: project
        };
    },

    async projectsByCategory(ctx) {
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

        ctx.body = {
            data: projects
        };
    },

    async projectsByMainCategory(ctx) {
        console.log(ctx.params.id)

        const projects = await strapi.entityService
            .findMany('api::project.project', {
                    populate: '*',
                    filters: {
                        main_category: {
                            id: {
                                $eq: ctx.params.id
                            }
                        }
                    },
                }
            );
        ctx.body = {
            data: projects
        };
    },

    async projectsByMainCategories(ctx) {
        let result;

        const categories = await strapi.entityService
            .findMany('api::category.category', {
                sort: [{
                    id: 'desc'
                }]
            });

        result = categories;

        for (const categoriesKey in categories) {
            const projects = await strapi.entityService
                .findMany('api::project.project',
                    {
                        filters: {
                            main_category: {
                                id: categoriesKey
                            }
                        },
                        populate: '*',
                        limit: 20
                    }
                );

            //NOTE .projects löschen dann erhält man keine Category Infos mehr
            result[categoriesKey]/*.projects*/ = projects;
        }

        ctx.body = {
            data: result
        };
    },
}));
