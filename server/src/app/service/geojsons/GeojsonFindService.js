const mongo = require("../../../../config/mongo");

module.exports = {
  getByFarm: async (farm_id) => {
    const db = mongo.getDb();
    const farm = await db.collection("farms").findOne({ "farm_id": farm_id });
    return db.collection("geofarms").findOne({ "farm": farm._id });
  }
};
