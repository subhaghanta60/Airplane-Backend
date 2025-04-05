function compareTime (timeString1,timeString2){
    let dataTime1 = new Date(timeString1);
    let dateTime2= new Date(timeString2);
    return dateTime2.getTime() > dateTime2.getTime();
}

module.exports = {
    compareTime
}