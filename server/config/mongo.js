const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const url = "mongodb://mongo:27017";
const client = new MongoClient(url, { useUnifiedTopology: true });
let _db;
module.exports = {
	connectToServer: () => {
		client.connect(async err => {
			if (err) console.error(err);
			console.warn("Mongo connected in 27017");
			_db = client.db("gaivota-test");
			await _db.collection("user").deleteMany({ email: "admin@gaivota.ai" });
			await _db.collection("user").insertOne({
				name: "Admin",
				email: "admin@gaivota.ai",
				password: "admin"
			});
			console.warn("Admin inserted");
			return true;
		});
	},

	getDb: () => {
		return _db;
	},

	getObjectId: () => {
		return ObjectId;
	}
};