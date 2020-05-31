const express = require("express");

const router = express.Router();

const FarmController = require("./app/controller/FarmController");
const PrecipitationController = require("./app/controller/PrecipitationController");
const AuthController = require("./app/controller/AuthController");
const NdviController = require("./app/controller/NdviController");


/**
 * Login route
 * @param {String} email - Email of login user
 * @param {String} password - Password of login user
 * @return {String} token
 */
router.post("/login", AuthController.login);
router.get("/auth", AuthController.check);

router.get("/", (_, res) => {
  res.status(200).send("Gaivota Test");
});

router.get("/farms", FarmController.index);
router.get("/farms/:id/geojson", FarmController.getGeojson);

router.get("/precipitations", PrecipitationController.index);

router.get("/ndvis", NdviController.index);

module.exports = router;