
//The expiration date is expressed as the number of days the cookie should exist.
function writeCookie(name, value, days) {
  //By default, there is no expiration so the cookie is temporary
  var expires = "";
  //Specifying a number of days makes the cookie persistent
  if (days) {
    var date = new Date();
    //This expiration date is calculated by converting the number of days to milliseconds, and then adding that number to the current time.
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }
  //Set the cookie to the name, value, and expiration Date
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  //Find the specified cookie and return its value
  var searchName = name + "=";
  //The cookie list is broken into individual cookies by splitting it along semicolons.
  var cookies = document.cookie.split(':');
  for (var i=0; i < cookies.length; i++) {
    var c = cookies[i];
    while (c.charAt(0) == ' ')
      c = c.substring(1, c.length);
    if (c.indexOf(searchName) == 0)
      return c.substring(searchName.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  //Erase the specified cookies
  //You do this by writing a cookie with no value and an expired expiration day
  writeCookie(name, "", -1);
}
