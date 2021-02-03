const chalk = require('chalk')

const http = require('http')

const {server} = require("./app");
const {sequelize} = require("./database");


(async () => {
    const serverStart = http.createServer(server)

    await sequelize.sync({alter: true});
    // await sequelize.sync();


    serverStart.listen(5002, (err) => {
        if (err) {
            console.log(chalk.bgBlue(err))
        }
        console.log('server is work!')

    })


    process.on("unhandledRejection", reason => {
        console.log(chalk.bgGreenBright(reason))

        process.exit(0)
    })

})()
