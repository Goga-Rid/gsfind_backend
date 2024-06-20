import router from '@adonisjs/core/services/router';
import { middleware } from "#start/kernel";
router.get('/', async ({}) => {
    return "gs find backend v0.0.1";
});
router.get('/github/redirect', ({ ally }) => {
    return ally.use('github').redirect();
});
router.get('/github/callback', '#controllers/authorizations_controller.githubCallback');
router.group(() => {
    router.get('/groups', '#controllers/groups_controller.index');
    router.post('/groups/new', '#controllers/groups_controller.create');
    router.get('/groups/:id', '#controllers/groups_controller.getById');
    router.get('/user/me', '#controllers/users_controller.getProfile');
    router.post('/user/me/edit', '#controllers/users_controller.getProfile');
    router.get('/user/:username', '#controllers/users_controller.getProfileByUsername');
}).use(middleware.auth());
//# sourceMappingURL=routes.js.map