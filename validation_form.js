        function formValidation(){

            let fname=document.querySelector(".fname").value;
            let lname=document.querySelector(".lname").value;
            let user=document.querySelector(".Uname").value;
            let mob=document.querySelector(".mob").value;
            let pass=document.querySelector(".pass").value;
            let Cpass=document.querySelector(".Cpass").value


            if(fname=="" || lname=="" || user=="" || mob=="" || pass=="" || Cpass==""){
                alert("input is Empty"); 
                return false;
            }
            else if(!isNaN(fname) || !isNaN(lname) || !isNaN(user)){
                alert("Number Not Allowed!");
                return false;
            }
            else if(isNaN(mob)){
                alert("Only numbers are Allowed!!");
                return false;
            }
            else if(mob.length < 10 || mob.length > 10){
                alert("Please enter 10 digit number")
                return false
            }
            else if(!pass.includes(Cpass)){
                alert("Not Matched");
                return false;
            }
            else{
                return true;
            }
           
        }
