function grades(x){
    
 
    if (x >= 79 && x<= 100){
        console.log("A");
    }
    else if(x >=60 && x< 70){
        console.log("B");
    }
    else if (x => 49 && x<= 59){
        console.log("C");
    }
    else if (x >=40 && x< 49){
        console.log("D");
    }
else {
    console.log("E");
}
}
grades(-1);