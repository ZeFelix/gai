const PrecipitationListService = require("../service/precipitations/PrecipitationListService");

module.exports = {
  index: async (_, res) => {
    const precipitations = await PrecipitationListService.get();
    res.status(200).send(precipitations);
  }
};