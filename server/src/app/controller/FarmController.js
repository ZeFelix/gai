const FarmListService = require("../service/farms/FarmListService");
const GeojsonFindService = require("../service/geojsons/GeojsonFindService");

module.exports = {
  index: async (_, res) => {
    const farms = await FarmListService.get();
    res.status(200).send(farms);
  },

  getGeojson: async (req, res) => {
    const { id } = req.params;
    const geojson = await GeojsonFindService.getByFarm(id);
    res.status(200).send(geojson);
  }
};