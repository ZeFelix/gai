const { parseISO, format } = require("date-fns");

module.exports = {
	joinByMonthAndYear: (data) => {
		let dataFormated = {};
		data.forEach(ndvi => {
			const date = format(parseISO(ndvi.date), "MMM/yy");
			if (!dataFormated[date]) {
				dataFormated[date] = {
					"ndvi_221": parseFloat(ndvi.ndvi_221.replace(",", ".")),
					"ndvi_231": parseFloat(ndvi.ndvi_231.replace(",", ".")),
					"ndvi_271": parseFloat(ndvi.ndvi_271.replace(",", "."))
				};
			} else {
				dataFormated[date].ndvi_221 += parseFloat(ndvi.ndvi_221.replace(",", "."));
				dataFormated[date].ndvi_231 += parseFloat(ndvi.ndvi_231.replace(",", "."));
				dataFormated[date].ndvi_271 += parseFloat(ndvi.ndvi_271.replace(",", "."));
			}
		});
		return dataFormated;
	}
};
