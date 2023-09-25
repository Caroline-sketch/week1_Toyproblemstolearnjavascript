// if ,else if statements and else clause used.//
// return value given when one of he conditions in the given order returns truthy.//
function grades(x){
    
    if (x >= 79 && x <= 100){
        console.log("A");
    }
    else if(x >=60 && x< 70){
        console.log("B");
    }
    else if (x >= 49 && x <= 59 ){
        console.log("C");
    }
    else if (x >=40 && x< 49){
        console.log("D");
    }
    else if(x > 0 && x < 40){
      console.log("E");
    }
    else {
      console.log("invalid number");
    }
}
grades();