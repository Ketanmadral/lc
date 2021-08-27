function CalculateClick(){
      
 var p = document.getElementById("loanAmount").value;
  var I = document.getElementById("interestRate").value;
  var n = document.getElementById("monthstoPay").value;
  
  var i = I / 100 / 12;
 // var n = N *12;
  
  var m = p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  
  document.getElementById("result").innerHTML = m.toFixed(0);
  
  
  
        
        
      }