
  function tc(a){
    let x = document.querySelector(a).value;
    return x;
  }
  function msg(a){
    let x = document.querySelector(".emsg").innerHTML=a;
    return x;
  }
  function msgb(a){
    let x = document.querySelector(".emsgb").innerHTML=a;
    return x;
  }
  function size(a){
    let x = document.querySelector(a).value.length;
    return x;
  }


   
  // show hide function
  //let idhide=document.getElementById("singup");
  function singu() {
    let hide=document.querySelector(".form-login");
  
    if (hide.classList[1]=="hidden") {
      hide.classList.toggle("visible");
    }else {
      hide.classList.toggle("hidden");
    }
    console.log(hide.classList);
    return hide;
  }
  
  function singup(){
    
    

    if (tc(".fname")==null || tc(".fname")=="") {
      alert("Please Enter First name");
      return false;
    }
    if (tc(".lname")==null || tc(".lname")=="") {
      alert("Please Enter Last name");
      return false;
    }
    if (tc(".email")==null || tc(".email")=="") {
      alert("Please Enter valid Email");
      return false;
    }

    if (tc(".hName")==null || tc(".hName")=="") {
        alert("Please Enter the valid card holders name");
        return false;
      }

    if (tc(".d_cardNum") == null || tc(".d_cardNum")=="") {
        alert("Please Enter the valid card Number");
        return false;
      }

    if (tc(".hName")==null || tc(".hName")=="") {
        alert("Please Enter the valid card holders name");
        return false;
      }

    if (tc(".date")==null || tc(".date")=="") {
        alert("Please Enter the date");
        return false;
       
        
    }

    if (tc(".cvv")==null || tc(".cvv")=="") {
       alert("Please Enter the cvv");
        return false;
       
        
    }

      alert("Thank you for the Donation!");

  }
  



  function myFunction() {
    let don_t = 0;
    let coffee = document.forms[0];
    
    let i;
    for (i = 0; i < coffee.length; i++) {
      if (coffee[i].checked) {
       don_t += (coffee[i].value * 1);
        
      }
    }
    alert ( "Thank you for the donation. The amount of your donation: " + don_t);
  }


  