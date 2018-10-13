let currentTime = new Date();
let currentHour = currentTime.getHours();
let currentMinute = currentTime.getMinutes();
let currentSecond = currentTime.getSeconds();

//This is to get the time and set it to current hour/min/sec

//Now we need to format the time stamp
//Let assume it's a 12 hour clock 
currentMinute = ( currentMinute <10 ? '0':'')+ currentMinute
currentSecond = ( currentSecond <10 ? '0':'')+currentSecond

// Now we need to set it to am or pm
let time = (currentHour <12 ) ? 'AM':'PM';
currentHour = ( currentHour >12 ) ? currentHour - 12 : currentHour;
currentHour = (currentHour == 0) ? 12: currentHour;

//now we ned to put them togather

let currentTimeString = currentHour + ':' + currentMinute + ':' + currentSecond + '' + time