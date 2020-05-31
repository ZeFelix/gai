const mongo = require("../../../../config/mongo");
const jwt = require("jsonwebtoken");
const { JWT_PW } = process.env;

module.exports = {
  check: async (token) => {
    token = token.split(" ")[1];
    return jwt.verify(token, JWT_PW);
  },

  login: async (email, password) => {
    const db = mongo.getDb();
    const user = await db.collection("user").findOne({ email, password });
    const token = jwt.sign(user, JWT_PW);
    return { user, token };
  }
};
