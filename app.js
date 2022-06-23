


const validMessage = document.getElementById("validMessage")

function submit(){

   const email = document.getElementById("emailInput");
   
   const regex = /^([a-zA-Z0-9\.-]{4,30})@([a-zA-Z0-9]{3,10})\.([a-zA-Z]{2,5})$/;
   console.log("Submitted")
   if (regex.test(email.value)){
      validMessage.textContent = 'Valid'
   }else{
      validMessage.textContent = 'Invalid'
   }


}