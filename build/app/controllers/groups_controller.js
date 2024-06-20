import Group from "#models/group";
import User from "#models/user";
export default class GroupsController {
    async create({ auth, request, response }) {
        const user = await auth.authenticateUsing(['api']);
        const findUser = await User.findBy('login', user.login);
        if (!findUser) {
            return 403;
        }
        const requiredFields = ['name', 'description', 'stack', 'course', 'roles', 'contactUser', 'contactGroup', 'group'];
        const data = request.only(requiredFields);
        const missingFields = requiredFields.filter(field => !data[field]);
        if (missingFields.length > 0) {
            return response.status(400).send({
                status: 400,
                data: `Отсутсвуют необходимые поля: ${missingFields.join(', ')}`,
            });
        }
        const req = await Group.create({
            name: data.name,
            description: data.description,
            stack: data.stack.join(', '),
            course: data.course,
            roles: data.roles.join(', '),
            contactUser: data.contactUser,
            contactGroup: data.contactGroup,
            group: data.group,
            ownerId: findUser.id
        });
        response.status(200);
        return {
            status: 200,
            data: req
        };
    }
    async index({ request }) {
        let users = await Group.query().preload('profile');
        const cleanedUsers = users.map(user => {
            user = user.toJSON();
            if (user.profile !== null) {
                const { githubToken, email, createdAt, updatedAt, description, ...cleanedProfile } = user.profile;
                return {
                    ...user,
                    profile: cleanedProfile
                };
            }
            return user;
        });
        return cleanedUsers;
    }
    async getById({ params, response }) {
        if (!params.id) {
            return 404;
        }
        let data = await Group.query().where('id', Number(params.id)).preload('profile');
        console.log(data[0].toJSON());
        if (data === null) {
            response.status(404);
            return {
                status: 404,
                data: "Группа не найдена."
            };
        }
        const cleanedUsers = data.map(user => {
            user = user.toJSON();
            if (user.profile !== null) {
                const { githubToken, email, createdAt, updatedAt, description, ...cleanedProfile } = user.profile;
                return {
                    ...user,
                    profile: cleanedProfile
                };
            }
            return user;
        });
        return cleanedUsers;
    }
}
//# sourceMappingURL=groups_controller.js.map