//Obtaining net pay using PEDMAS 

function netSalaryCalculation(){
    let gross = 35000;
    let nssf = 0.06 * gross;
    let nhif = 950;
    let PAYE= 0.25 * gross;
    let deductions =  nssf + nhif + PAYE;
    let net = gross - deductions;
    console.log(net);
  }
  netSalaryCalculation();

// *********************
// use of conditional statements

  function netSalaryCalculation() {

    let gross = 100000;
    let PAYE;
    if (gross > 24000) {
      PAYE = 0.04 * gross;
    }
    else if (gross > 24001 && gross < 32333) {
      PAYE = 0.06 * gross;
    }
    else if (gross > 32333) {
      PAYE = 0.08 * gross;
    }
    else {
      console.log("invalid input");
    }
 // defining data input
    let nssf = 0.06 * gross;
    let nhif = 1200;
    // adding all deductions to be deucted from gross income 
    let deductions = nssf + nhif + PAYE;
// subtracting the deductions from gross income to get net pay
    let netpay = gross - deductions;
    console.log(netpay);
  }
  
  netSalaryCalculation();