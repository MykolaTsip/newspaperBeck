const {newsPaperService} = require('../services')


module.exports = {
    CreateNews: async (req, res) => {

        const {user_id} = req
        const obj = req.body

        await newsPaperService.createNewspaper({...obj, user_id})
        const news = await newsPaperService.returnAllNewsOfUser(user_id)
        res.json(news)
    },

    GetAllNewsOfUser: async (req, res) => {
        const {user_id} = req
        const news = await newsPaperService.returnAllNewsOfUser(user_id)
        res.json(news)
    },

    DeleteUserNews: async (req, res) => {
        const {id} = req.params
        await newsPaperService.deleteUserNews({id})
        res.json(200)
    },

    UpdateTitleNews: async (req, res) => {
        const updN = await newsPaperService.updateTitle({ id: + req.params.id}, req.params.title)
        console.log(updN)
        res.json(updN)
    }
}
