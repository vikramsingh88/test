var countryName = function(code){
	switch(code){
		case '91' : 
		countryName = 'India' ;
		break;

		case '1' : 
		countryName = 'USA' ;
		break;
	}

	return countryName;
}

module.exports.getCountryName = countryName;