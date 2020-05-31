const NvdiListService = require("../service/nvdi/NvdiListService");
const NvdiFormatService = require("../service/nvdi/NvdiFormatService");

module.exports = {
	index: async (_, res) => {
		const nvdis = await NvdiListService.list();
		const nvdisFormated = NvdiFormatService.joinByMonthAndYear(nvdis);
		res.status(200).send(nvdisFormated);
	}
};