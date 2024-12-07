// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        //console.log("5 is best number");
    }
    //console.log(element); 
}
// Nested loop ak ka inder dusri loop

for (let i = 1; i <=10; i++) {

    //console.log(`outer loop: ${i}`);

    for (let j = 1; j <=10; j++) {
        //console.log(`inner loop: ${j} and inner loop: ${i}`);
        //console.log(i + '*' +j+ ' = ' + i*j);    
    }
}

const myarray = ["flash", "batman", "superman"];
  //console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    //console.log(element); 
}

// braek and continue

for (let i = 1; i <=20; i++) {
    if (i == 5) {
        console.log("end 5");
        break
    }
    console.log(`value of i ${i}`);
}
for (let i = 1; i <=20; i++) {
    if (i == 5) {
        console.log("end 5");
        continue
    }
    console.log(`value of i ${i}`);
}


