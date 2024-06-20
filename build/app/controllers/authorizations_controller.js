import User from '#models/user';
export default class AuthorizationsController {
    async githubCallback({ response, ally }) {
        const gh = ally.use('github');
        if (gh.accessDenied()) {
            return 'You have cancelled the login process';
        }
        console.log(gh.stateMisMatch());
        if (gh.stateMisMatch()) {
            return 'We are unable to verify the request. Please try again';
        }
        console.log(gh.hasError());
        if (gh.hasError()) {
            return gh.getError();
        }
        const user = await gh.user();
        if (!user) {
            return null;
        }
        let findUser = await User.query().where('login', user.original.login).first();
        if (!findUser) {
            findUser = await User.create({
                login: user.original.login,
                email: user.email,
                avatar: user.avatarUrl,
                github_token: user.token.token,
            });
        }
        const token = await User.accessTokens.create(findUser);
        response.safeStatus(200);
        return {
            type: 'bearer',
            value: token.value.release(),
        };
    }
}
//# sourceMappingURL=authorizations_controller.js.map