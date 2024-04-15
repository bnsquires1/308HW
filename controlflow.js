// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
//const PI = 3.1415;
//const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

// predict the plant growth after a specific number of weeks

totalRadius = 5;
const PI = 3.14;
let space = 0.8;
let start = 20 ;

let area = 5 * 5 * PI; {
console.log(area)
}
// 78.5 meters

const plantAreaWeek1= space * start; {
    console.log(plantAreaWeek1)
}
// 16 meters for week 1

const plantAreaWeek2 = plantAreaWeek1 * plantAreaWeek1; {
    console.log(plantAreaWeek2)
}

const plantAreaWeek3 = plantAreaWeek2 * plantAreaWeek2; {
    console.log(plantAreaWeek3)
}


