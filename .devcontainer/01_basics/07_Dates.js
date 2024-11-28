let myDate = new Date();

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toISOString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toJSON());

console.log(myDate.toTimeString());

console.log(myDate.toLocaleString());

let newDate = new Date(2023, 0, 24)
console.log(newDate.toDateString());

// output Tue Jan 24 2023

let mydate = new Date (2024, 0, 25, 5, 3 )
console.log(mydate.toLocaleString());

// output 1/25/2024, 5:03:00 AM

let myTimestap = Date.now();
console.log(myTimestap);

// output in milisecond (1732811592854)

let wayDate = new Date(2023, 0, 23);
console.log(wayDate.getTime);

// out put in milisecond  (1674460800000)

console.log(Math.floor(Date.now()/100));

// output in second   (17328122682)

let seeDate = new Date();
console.log(seeDate.getDay());
console.log(seeDate.getMonth());

// `${seeDate.getMonth()} and the time` 

seeDate.toLocaleString('defult',{
    weekday: "long"
})