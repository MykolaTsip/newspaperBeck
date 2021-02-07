const {statues} = require("../configs");
const {userService, tokens} = require('../services')

const {tokinazer, heshPass, comparePass} = require('../helpers')

module.exports = {

    CreateUser: async (req, res) => {

        const user = req.body;

       user.password = await heshPass(user.password)

        await userService.createUser(user);


        res.json(statues.OK) // status enum resStatuses.OK // done
    },


    LoginUser: async (req, res) => {
        const {password} = req.body
        const user = req.user

        await comparePass(password, user.password)

        const token = await tokinazer()

        await tokens.createToken({
            ...token,
            user_id: user.id
        })

        res.json(token)
    },


    DeleteUser: async (req, res) => {

        const {params} = req

        await userService.deleteUser({id: +params.id})

        res.json(statues.OK)
    },

    validAccess: (req, res) => {


        res.json(200);
    }
}
