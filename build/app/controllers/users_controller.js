import User from "#models/user";
export default class UsersController {
    async getProfile({ auth }) {
        const user = await auth.authenticateUsing(['api']);
        const findUser = await User.findBy('login', user.login);
        if (!findUser) {
            return 403;
        }
        return {
            status: 200,
            data: {
                id: findUser.id,
                login: findUser.login,
                avatar: findUser.avatar,
                description: findUser.description
            }
        };
    }
    async getProfileByUsername({ response, params, auth }) {
        const { username } = params;
        const findUser = await User.findBy('login', username);
        if (!findUser) {
            response.safeStatus(404);
            return { status: 404, data: "Пользователь не найден." };
        }
        return {
            status: 200,
            data: {
                id: findUser.id,
                login: findUser.login,
                avatar: findUser.avatar,
                description: findUser.description
            }
        };
    }
}
//# sourceMappingURL=users_controller.js.map