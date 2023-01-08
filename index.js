let loanAmount = document.getElementById("loanAmount");
let interestRate = document.getElementById("interestRate");
let loanTenure = document.getElementById("loanTenure");
let btn = document.getElementById("btn");

btn.addEventListener("click",function(e){
e.preventDefault();
calculateEMI();
});

const calculateEMI = ()=>{
let year = document.getElementById("year").checked;
let  month = document.getElementById("month").checked;
let NoOfMonths = 0;
if(year=="" &&  month == ""){
    alert("Please Select loan tenure type -> Month Year");
}else{
    if(year==true){
        NoOfMonths= loanTenure.value *12; 
    }else{
        NoOfMonths = loanTenure.value 
    }
    let rate = parseFloat(interestRate.value)/12/100;
    let principal = loanAmount.value;
    let number = NoOfMonths;
    
    // formula EMI = p*r* (1+r)^n/(1+r)^n-1;

    let EMI = (principal*rate*Math.pow((1+rate),number))/(Math.pow((1+rate),number)-1);
    let totalInterest = (EMI * number) - principal;
    let totalPayment = totalInterest + parseFloat(principal);
    document.getElementById("emi").innerText = "र" + Math.round(EMI);
    document.getElementById("interest").innerText = "र" + Math.round(totalInterest);
    document.getElementById("payment").innerText = "र" + Math.round(totalPayment);
}
}

