const ibeem = {
  name: "IBEEM ThoughtPad",
  description: "For those who really need a laptop, no matter the emotional cost",
  price: 1000,
  features: "<b>Features:</b><br>Has a screen<br>Most keys still remaining<br>Can be used as makeshift rainshelter",
  image: "images/ibeemThoughtpad.jpg"
};
const pear = {
  name: "Pear Electricfilm",
  description: "For those who need to keep the doctor away once a day.",
  price: 4500,
  features: "<b>Features:</b><br>Made locally sourced steel<br>Comes in a specially selected color<br>One of a kind components<br>(That can't even be obtained by the manufacturer",
  image: "images/pearElectricfilm.jpg"
};
const shiba = {
  name: "Shiba T800",
  description: "For those who miss the sound of living right next to an airport",
  price: 1700,
  features: "<b>Features:</b><br>RGB2.1 Keyboard<br>Powerhouse<br>Massive exhaust fans",
  image: "images/shibaT800.jpg"
};
const adell = {
  name: "ADell Remedy",
  description: "For those who want to set fire to the rain",
  price: 1650,
  features: "<b>Features:</b><br>Hello2.0 module<br>Takes it all<br>Turns tables",
  image: "images/adeleRemedy.jpg"
};
let laptopArr = ["",ibeem, pear, shiba, adell];
let missingLoan = 0;
let balance = 200;
let workPay = 0;
let outLoan = document.getElementById('outstandingLoan');
let laptopPrice = 0;
const earnings = 100;

/*
  Functionality related to the laptop selector menu.
  Awaits a change to the selector menu and then displays the info related to the selection.
  Adds a new image element if none exists, otherwise changes the source to one related to the selection.
*/
document.getElementById("selectMenu").onchange = function () {selectScript();}
function selectScript() {
  let alertOutput = document.getElementById("alertOutput");
  let e = document.getElementById("selectMenu");
  let laptopResult = laptopArr[(e.options[e.selectedIndex].value)];
  document.getElementById("selectOutput").innerHTML=laptopResult.name + "<br>" + laptopResult.features;
  let img = document.getElementById("laptopImage");
  let foot = document.getElementById("footer");
  laptopPrice = laptopResult.price;
  if(img){
    document.getElementById("laptopImage").src = laptopResult.image;
    document.getElementById("laptopDescription").innerHTML="<b>" + laptopResult.price + "kr.</b><br>" + laptopResult.description;
  } else {
    const imgCreate = document.createElement("IMG");
    imgCreate.setAttribute("src", laptopResult.image);
    imgCreate.setAttribute("id", "laptopImage");
    imgCreate.setAttribute("width", "304");
    imgCreate.setAttribute("height", "228");
    foot.insertBefore(imgCreate, foot.childNodes[0]);
    const para = document.createElement("p");
    para.setAttribute("id", "laptopDescription");
    foot.appendChild(para);
    document.getElementById("laptopDescription").innerHTML= "<b>" + laptopResult.price + "kr.</b><br>" + laptopResult.description;
  }
}

const addpaybtn = document.getElementById('buyButton');
addpaybtn.addEventListener('click', function(){
  if(balance >= laptopPrice){
    balance = balance - laptopPrice;
    document.getElementById("balanceAmount").innerHTML="Balance: " + balance + "kr.";
    alertOutput.innerHTML="<b>Congratulations on the new laptop!</b>";
  } else {
    console.log(laptopPrice);
    alertOutput.innerHTML="<b>You cannot afford this laptop!</b>";
  }
});


/*
  Functionality related to the 'Get A Loan' button.
  Awaits a click action on the button element.
  Updates the unpaid loan amount, and the current balance.
*/
const addLoanButton = document.getElementById('loanButton');
addLoanButton.addEventListener('click', function(){
  alertOutput.innerHTML="";
  if(missingLoan > 0){
    alert("Pay off your loan first");
  } else {
    let inputLoan = parseInt(prompt("How much to you want to loan?", 0));
    if(inputLoan > 0) {
      document.getElementById('repayButton').style.display = "inline-block";
      missingLoan = 0;
      missingLoan += inputLoan;
      outLoan.innerHTML="Outstanding Loan: " + missingLoan + "kr.";
      outLoan.style.display = "block";
      balance += inputLoan;
    }
  }
});
/*
  Functionality related to the 'Repay Loan' button.
  Awaits a click action on the button element.
  Reduces the unpaid loan amount by the current pay amount.
  Any pay amount remaining after a loan is resolved is saved.
*/
const addRepayButton = document.getElementById('repayButton');
addRepayButton.addEventListener('click', function(){
  alertOutput.innerHTML="";
  let tempDif = missingLoan - workPay;
  if(tempDif <= 0){
    missingLoan = 0;
    workPay = tempDif*(-1);
    document.getElementById('repayButton').style.display = "none";
    outLoan.style.display = "none";
  } else {
    missingLoan -= workPay;
    outLoan.innerHTML="Outstanding Loan: " + missingLoan + "kr.";
    workPay = 0;
  }
  document.getElementById("payAmount").innerHTML="Pay: " + workPay + "kr.";
});
/*
  Functionality related to the 'Bank' button.
  Awaits a click action on the button element.
  Transfers current pay amount to the balance.
*/
const addbankbtn = document.getElementById('bankButton');
addbankbtn.addEventListener('click', function(){
  alertOutput.innerHTML="";
  balance = balance + workPay;
  workPay = 0;
  document.getElementById("balanceAmount").innerHTML="Balance: " + balance + "kr.";
  document.getElementById("payAmount").innerHTML="Pay: " + workPay + "kr.";
});

/*
  Funtionality related to the 'Work' button.
  Awaits a click action on the button element.
  Adds current salary to pay amount.
  If a loan is active, subtracts 10% from the unpaid loan and adds the remainder.
*/
const addworkbtn = document.getElementById('workButton');
addworkbtn.addEventListener('click', function(){
  alertOutput.innerHTML="";
  if(missingLoan > 0) {
    missingLoan -= earnings * 0.1;
    workPay += earnings * 0.9;
  } else {
    workPay += earnings;
  }
  document.getElementById("payAmount").innerHTML="Pay: " + workPay + "kr.";
});

