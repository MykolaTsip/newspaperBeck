
const {NewspaperModel} = require('../database/model/index')


module.exports = {

    allNewspapers: () => {
        return NewspaperModel.findAll({})
    }
}
