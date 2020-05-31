const NvdiListService = require("../service/nvdi/NvdiListService");

module.exports = {
  index: async (req, res) => {
    const nvdis = await NvdiListService.list();
    res.status(200).send(nvdis);
  }
};