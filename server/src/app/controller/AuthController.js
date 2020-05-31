const AuthService = require("../service/auths/AuthService");

module.exports = {
  check: async (req, res) => {
    let token = req.header("Authorization");
    const check = await AuthService.check(token);
    res.status(200).send(check);
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const { user, token } = await AuthService.login(email, password);
    res.status(200).send({ userData: user, token });
  }
};