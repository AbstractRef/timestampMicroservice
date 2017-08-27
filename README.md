# Timestamp microservice

**User Story:**  
I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

**User Story:**  
If it does, it returns both the Unix timestamp and the natural language form of that date.

**User Story:**  
If it does not contain a date or Unix timestamp, it returns null for those properties.

**Example usage:**  
  https://regal-mist.glitch.me/December%2025,%202017
  https://regal-mist.glitch.me/1503792000   

**Example output:**  
  { "unix": 1514160000, "natural": "December 25, 2017" }
