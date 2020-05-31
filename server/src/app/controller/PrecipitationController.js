const PrecipitationListService = require("../service/precipitations/PrecipitationListService");
const PrecipitationFormatService = require("../service/precipitations/PrecipitationFormatService");

module.exports = {
	index: async (_, res) => {
		const precipitations = await PrecipitationListService.get();
		const precipitationsFormated = PrecipitationFormatService.joinByMonthAndYear(precipitations);
		res.status(200).send(precipitationsFormated);
	}
};