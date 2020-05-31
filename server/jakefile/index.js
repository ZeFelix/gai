let { task, desc } = require("jake");
const csv = require("csv-parser");
const path = require("path");
const fs = require("fs");
const client = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
let db;

client.connect(
	url,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, client) => {
		if (err) throw err;
		db = client.db("gaivota-test");
	});

namespace("seeder", function () {
	desc("This is the task migrate farms.csv.");
	task("ReadFarm", function () {
		const results = [];
		const pathName = "../../data/farms.csv";
		fs.createReadStream(path.resolve(__dirname, pathName))
			.pipe(csv())
			.on("data", (data) => results.push(data))
			.on("end", async () => {
				db.collection("farms").insertMany(results, (err, res) => {
					if (err) throw err;
					console.log(`Inserted: ${res.insertedCount} rows`);
				});
			});
	});


	desc("This is the task migrate farms_ndvi.csv.");
	task("Ndvi", function () {
		const results = [];
		const pathName = "../../data/farms_ndvi.csv";
		fs.createReadStream(path.resolve(__dirname, pathName))
			.pipe(csv())
			.on("data", (data) => results.push(data))
			.on("end", async () => {
				db.collection("ndvi").insertMany(results, (err, res) => {
					if (err) throw err;
					console.log(`Inserted: ${res.insertedCount} rows`);
				});
			});
	});


	desc("This is the task migrate farms_precipitation.csv.");
	task("Precipitation", function () {
		const results = [];
		const pathName = "../../data/farms_precipitation.csv";
		fs.createReadStream(path.resolve(__dirname, pathName))
			.pipe(csv())
			.on("data", (data) => results.push(data))
			.on("end", async () => {
				db.collection("precipitation").insertMany(results, (err, res) => {
					if (err) throw err;
					console.log(`Inserted: ${res.insertedCount} rows`);
				});
			});
	});

	desc("This is the task migrate farms.csv.");
	task("geoFarm", function () {
		const geoFarm221Path = "../../data/geo_farm_221.json";
		const geoFarm231Path = "../../data/geo_farm_231.json";
		const geoFarm271Path = "../../data/geo_farm_271.json";

		const rawdata221 = fs.readFileSync(path.resolve(__dirname, geoFarm221Path));
		const rawdata231 = fs.readFileSync(path.resolve(__dirname, geoFarm231Path));
		const rawdata271 = fs.readFileSync(path.resolve(__dirname, geoFarm271Path));

		const geoFarm221 = JSON.parse(rawdata221);
		const geoFarm231 = JSON.parse(rawdata231);
		const geoFarm271 = JSON.parse(rawdata271);

		client.connect(
			url,
			{ useNewUrlParser: true, useUnifiedTopology: true },
			(err, client) => {
				if (err) throw err;
				db = client.db("gaivota-test");
				db.collection("farms").findOne({ "farm_id": "221", }, (err, result) => {
					if (err) throw err;
					db.collection("geofarms").insertOne({
						...geoFarm221, "farm": result._id
					});
				});

				db.collection("farms").findOne({ "farm_id": "231", }, (err, result) => {
					if (err) throw err;
					db.collection("geofarms").insertOne({
						...geoFarm231, "farm": result._id
					});
				});

				db.collection("farms").findOne({ "farm_id": "271", }, (err, result) => {
					if (err) throw err;
					db.collection("geofarms").insertOne({
						...geoFarm271, "farm": result._id
					});
				});
			});
		console.log("Inserted");
	});
});
