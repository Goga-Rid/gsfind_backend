export default class AuthMiddleware {
    redirectTo = '/login';
    async handle(ctx, next, options = {}) {
        try {
            await ctx.auth.authenticateUsing(options.guards, { loginRoute: this.redirectTo });
            return next();
        }
        catch (e) {
            if (e.status === 401) {
                ctx.response.status(401);
                ctx.response.send({ status: 401, data: "Пользователь не авторизован." });
            }
        }
    }
}
//# sourceMappingURL=auth_middleware.js.map