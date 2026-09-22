/*
What date corresponds to the nth day of the year?
The answer depends on whether the year is a leap year or not.

Write a function that will help you determine the date if you know the number of the day in the year, as well as whether the year is a leap year or not.
The function accepts the day number and a boolean value isLeap as arguments, and returns the corresponding date of the year as a string "Month, day".
Only valid combinations of a day number and isLeap will be tested.

Examples:
* With input `41, false` => return "February, 10"
* With input `60, false` => return "March, 1
* With input `60, true` => return "February, 29"
* With input `365, false` => return "December, 31"
* With input `366, true` => return "December, 31"
calendar
*/
function getDay(day, isLeap){
   if(isLeap){
        if(day<=31 && day>=1) return `January, ${day - 0}`
        if(day<=60 && day>=32) return `February, ${day - 31}`
        if(day<=91 && day>=61) return `March, ${day - 60}`
        if(day<=121 && day>=92) return `April, ${day - 91}`
        if(day<=152 && day>=122) return `May, ${day - 121}`
        if(day<=182 && day>=153) return `June, ${day - 152}`
        if(day<=213 && day>=183) return `July, ${day - 182}`
        if(day<=244 && day>=214) return `August, ${day - 213}`
        if(day<=274 && day>=245) return `September, ${day - 244}`
        if(day<=305 && day>=275) return `October, ${day - 274}`
        if(day<=335 && day>=306) return `November, ${day - 305}`
        if(day<=366 && day>=336) return `December, ${day - 335}`
   }else{
        if(day<=31 && day>=1) return `January, ${day - 0}`
        if(day<=59 && day>=32) return `February, ${day - 31}`
        if(day<=90 && day>=60) return `March, ${day - 59}`
        if(day<=120 && day>=91) return `April, ${day - 90}`
        if(day<=151 && day>=121) return `May, ${day - 120}`
        if(day<=181 && day>=152) return `June, ${day - 151}`
        if(day<=212 && day>=182) return `July, ${day - 181}`
        if(day<=243 && day>=213) return `August, ${day - 212}`
        if(day<=273 && day>=244) return `September, ${day - 243}`
        if(day<=304 && day>=274) return `October, ${day - 273}`
        if(day<=334 && day>=305) return `November, ${day - 304}`
        if(day<=365 && day>=335) return `December, ${day - 334}` 
   }
}
console.log(getDay(15, false));
console.log(getDay(41, false));
console.log(getDay(59, false));
console.log(getDay(60, false));
console.log(getDay(60, true));
console.log(getDay(41, false));
console.log(getDay(365, false));
console.log(getDay(366, true));
console.log(getDay(214, true));