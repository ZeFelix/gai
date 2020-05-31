require("dotenv").config();
const express = require("express");
const body_parser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const { PORT, JWT_PW } = process.env;
const mongo = require("../config/mongo");
const app = express();

mongo.connectToServer();

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

/**
 * Login route
 * @param {String} email - Email of login user
 * @param {String} password - Password of login user
 * @return {String} token
 */
app.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const db = mongo.getDb();
	const user = await db.collection("user").findOne({ email, password });
	const token = jwt.sign(user, JWT_PW);
	res.status(200).send({ userData: user, token });
});

app.get("/auth", (req, res) => {
	let token = req.header("Authorization");
	token = token.split(" ")[1];
	const ok = jwt.verify(token, JWT_PW);
	res.status(200).send(ok);
});

app.get("/", (_, res) => {
	res.status(200).send("Gaivota Test");
});

app.get("/farms", async (_, res) => {
	const db = mongo.getDb();
	const farms = await db.collection("farms").find({}).toArray();
	res.status(200).send(farms);
});

app.get("/farms/:id/geojson", async (req, res) => {
	const { id } = req.params;
	const db = mongo.getDb();
	const farm = await db.collection("farms").findOne({ "farm_id": id });
	const geojson = await db.collection("geofarms").findOne({ "farm": farm._id });
	res.status(200).send(geojson);
});

app.get("/precipitations", async (_, res) => {
	const db = mongo.getDb();
	const precipitations = await db.collection("precipitation").find({}).toArray();
	res.status(200).send(precipitations);
});

app.get("/ndvis", async (_, res) => {
	const db = mongo.getDb();
	const nvdis = await db.collection("ndvi").find({}).toArray();
	res.status(200).send(nvdis);
});

app.listen(PORT !== "undefined" ? PORT : 5000, () => {
	console.warn("App is running at http://localhost:" + PORT);
});

module.exports = app;