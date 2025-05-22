'use strict'

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('plugin::user-permissions.auth', ({ strapi }) => ({
    async register(ctx) {
        const defaultRegister = await super.register(ctx);

        const { role } = ctx.request.body;

        if (role) {
            const user = await strapi.entityService.create('plugin::users-permissions.user', defaultRegister.user.id, {
                data: {
                    role : ( await strapi.db.query('plugin::user-permissions.role').findOne({
                        where: { type: role }
                    }))?.id,
                }
            });
        }

        return defaultRegister;
    }
}));