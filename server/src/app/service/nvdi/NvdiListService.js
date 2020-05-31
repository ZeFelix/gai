const mongo = require("../../../../config/mongo");

module.exports = {
  list: () => {
    const db = mongo.getDb();
    return db.collection("ndvi").find({}).toArray();
  }
};
