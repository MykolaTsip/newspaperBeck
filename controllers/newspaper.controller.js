const  {newsPaperService} = require('../services')


module.exports = {
    AllNews: async (req, res) => {

        const news = await newsPaperService.allNewspapers()

        res.json(news)
    }
}
