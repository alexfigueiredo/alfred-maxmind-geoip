const alfy = require('alfy');

alfy
		.fetch(`https://www.maxmind.com/geoip/v2.1/city/${alfy.input}?use-downloadable-db=1&demo=1`)
		.then(({city, country, continent}) => {

				const title = city.names.en;
				const subtitle = `${country.names.en}, ${continent.names.en}`;

				alfy.output([
						{
								title,
								subtitle,
								arg: title
						}
				]);

		});
