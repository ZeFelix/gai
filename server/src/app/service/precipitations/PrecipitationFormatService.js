const { parseISO, format } = require("date-fns");

module.exports = {
	joinByMonthAndYear: (data) => {
		let dataFormated = {};
		data.forEach(precipitation => {
			const date = format(parseISO(precipitation.date), "MMM/yy");
			if (!dataFormated[date]) {
				dataFormated[date] = {
					"precipitation_221": parseInt(precipitation.precipitation_221),
					"precipitation_231": parseInt(precipitation.precipitation_231),
					"precipitation_271": parseInt(precipitation.precipitation_271)
				};
			} else {
				dataFormated[date].precipitation_221 += parseInt(precipitation.precipitation_221);
				dataFormated[date].precipitation_231 += parseInt(precipitation.precipitation_231);
				dataFormated[date].precipitation_271 += parseInt(precipitation.precipitation_271);
			}
		});
		return dataFormated;
	}
};
