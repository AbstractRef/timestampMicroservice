exports.processDate = function (givenDate) {
  console.log("Made it to the manager");

    var parsedDate = parseDate(givenDate);
    
    if (parsedDate) {
      
      var unixTime = toUnixTime(parsedDate);
      var naturalTime = toNaturalTime(parsedDate);
       
      return( {'unix' : unixTime, 'natural': naturalTime} );
      
    } else {
      
      return( {'unix' : null, 'natural': null} );
    
    }   

};

function parseDate(dateStr) {
  
  if (!isNaN(dateStr)) {
    // Handle as unix epoch time
    
    // Converting our unix timestamp from seconds to millis (millis expected)
    return new Date(parseInt(dateStr) * 1000);
    
  } else {
    // Handle natural date string
    
    // Use Javascript's Date.parse to parse date strings in a number of forms
    var millis = Date.parse(dateStr);
    
    if (isNaN(millis)) {
      // If Date.parse fails, it returns NaN
      return false;
      
    } else {
      // Otherwise, a date was successfully identified and parsed
      return new Date(millis);
      
    }
  }
  
}

const months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];

// Converts a Date value to the equivalent UNIX epoch time (number).
function toUnixTime(date) {
  
  // Date.getTime() returns epoch time in millis, so we divided to get seconds.
  return (date.getTime() / 1000);
  
}

// Converts a Date value to the equivalent natural language 
function toNaturalTime(date) {
  
  return "" + date.getDate() + " " + months[date.getMonth()] + ", " 
  + date.getFullYear();
  
}
