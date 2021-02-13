const userData = require("./../../model/user");

module.exports = {
    userName: (req, res) => {
        console.log(userData);
        res.send(userData);
    },
};
