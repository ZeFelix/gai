const mongo = require("../../../../config/mongo");

module.exports = {
  get: () => {
    const db = mongo.getDb();
    return db.collection("farms").find({}).toArray();
  }
};
