
const {NewspaperModel} = require('../database/model/index')


module.exports = {
    allNewspapers: () => {
        return NewspaperModel.findAll({})
    },

    createNewspaper: (object) => {
        return NewspaperModel.create(object);
    },

    returnAllNewsOfUser: (user_id) => {
        return NewspaperModel.findAll({
            where: {user_id}
        })
    },

    deleteUserNews: (id) => {
        return NewspaperModel.destroy({
            where: id
        })
    },

    updateTitle: (params, options) => {
        console.log(params, options)
        return NewspaperModel.update(params, {where: {title: options}})
    }
}
