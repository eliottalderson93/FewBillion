var numDays;
var final = 10000000;
function Expo(final){
    var penny = 0.01;
    numDays = 0;
    while(penny<final){
        penny = penny+penny;
        numDays++;
    }
    return penny; 
}
Expo(final);
console.log("It took",numDays, 'days to earn',Expo(final));