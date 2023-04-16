let inputPay = document.querySelector(".button1");
const percent = document.querySelectorAll(".buttonall");
const buttoncustom = document.querySelector(".custom");
const inputpeople = document.querySelector(".quantity");
const tipAmount = document.querySelector(".dollar");
const totalPerson = document.querySelector(".dollartwo");
const buttonReset = document.querySelector(".buttonres")


let percentAmount = 0;

function percentAll(){
    if (inputPay.value > 10000){
        inputPay.value = 10000;
       }
       if (inputPay.value < 0){
        inputPay.value = 0;
       }
    const tip = inputPay.value * percentAmount / 100 / inputpeople.value;
   tipAmount.innerHTML = "$" + tip.toFixed(2);
   const total = (inputPay.value * percentAmount / 100  + +inputPay.value) / inputpeople.value;
   totalPerson.innerHTML = "$" + total.toFixed(2);
  
   console.log(percentAmount)
}

    percent.forEach((element) => {
    element.addEventListener("click", function(){
        percent.forEach((button) =>{
            button.classList.remove("active")
        })
        element.classList.add("active")
        percentAmount = element.value;
        percentAll();
    });
    });
  
    buttoncustom.addEventListener("click", function(){
        percentAmount = buttoncustom.value;
        if(buttoncustom.value > 100){
            buttoncustom.value = 100
        }
        buttoncustom.style.border = "2px solid #26C2AE";
        percentAll()
    });

 inputPay.addEventListener("input", function(){
    percentAll()
    inputPay.style.border = "2px solid #26C2AE";
   
})
inputpeople.addEventListener("click", function(){
    inputpeople.style.border = "2px solid #26C2AE";
})

buttonReset.addEventListener("click", function(){
    buttonReset.style.background = "#26C2AE"
    inputPay.value = "0";
    buttoncustom.value = "";
    inputpeople.value = "";
    tipAmount.innerHTML = "$" + "0.00";
    totalPerson.innerHTML = "$" + "0.00";
    inputpeople.style.border = "none";
    inputPay.style.border = "none";
    buttoncustom.style.border = "none";
    percentAmount = 0;
    percent.forEach((element) => {
        element.style.background = "#00474B"
    } )


});

  

 
