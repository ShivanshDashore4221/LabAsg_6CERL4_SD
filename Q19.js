//Q19.Write a JavaScript function that returns the number of minutes in hours and minutes.  
//"200 minutes = 3 hour(s) and 20 minute(s)."
function timeConvert(time){
    var output = "";
    var hrs = Math.floor(time/60);
    var min = time - (hrs*60);

    output += time+" minutes = "+hrs+" hour(s) and "+min+" minute(s).";
    return output;

}
console.log(timeConvert(200)); 