require("dotenv").config();
const { PORT } = process.env;

const app = require("./app");


app.listen(PORT !== "undefined" ? PORT : 5000, () => {
	console.warn("App is running at http://localhost:" + PORT);
});

module.exports = app;