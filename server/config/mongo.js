const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://mongo:27017";
const client = new MongoClient(url, { useUnifiedTopology: true });

class Mongo {
	constructor() {
		this._db = null;
		this.connect();
	}

	connect() {
		client.connect(async err => {
			if (err) console.error(err);
			console.warn("Mongo connected in 27017");
			this._db = client.db("gaivota-test");
			await this._db.collection("user").deleteMany({ email: "admin@gaivota.ai" });
			await this._db.collection("user").insertOne({
				name: "Admin",
				email: "admin@gaivota.ai",
				password: "admin"
			});
			console.warn("Admin inserted");
			return true;
		});
	}

	getDb() {
		return this._db;
	}
}

module.exports = new Mongo();