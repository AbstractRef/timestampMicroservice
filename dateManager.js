exports.processDate = function (dateParam) {
	var parsedDate = stringToDate(dateParam);
    if (parsedDate) {
      var unixTime = toUnixTime(parsedDate);
      var naturalTime = toNaturalTime(parsedDate);
      return( {'unix' : unixTime, 'natural': naturalTime} );
    } else {
      return( {'unix' : null, 'natural': null} );
    }   
};

function stringToDate(dateStr) {
  if (!isNaN(dateStr)) {
    return new Date(parseInt(dateStr) * 1000);    
  } else {
    var millis = Date.parse(dateStr);
    if (isNaN(millis)) {
      return false;      
    } else {
      return new Date(millis);      
    }
  }
}

function toUnixTime(date) {  
  // Date.getTime() returns epoch time in millis, divided to get seconds.
  return (date.getTime() / 1000);
}

function toNaturalTime(date) {
	var locale = "en-uk";
	return "" + date.getDate() + " " 
		+ date.toLocaleString(locale, { month: "long" }) + ", " 
		+ date.getFullYear();
}