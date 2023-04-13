let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


function display_pop(){
var sign = document.getElementById('signup');
sign.style.display = "block";
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == sign) {
    sign.style.display = "none";
  }
}
}

function email_check(){
  var email = document.getElementById("emailid").value;
  var pattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  if(email.match(pattern)){
       
    $.ajax({
      type: "POST",
      url: "http://localhost/netflixclone/login.php", 
      data: {email: email},
     
      success: function(res) {
            console.log(res);
                alert(res);
              		
            		},

  });


  }
  else{
    alert("Invalid email");
  }
}

function signup_validation(){
  var email = document.getElementById("email_id").value;
  var pattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  var password = document.getElementById("password").value;
	var pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  if(email.match(pattern) && password.match(pass)){
   $.ajax({
    type: "POST",
    url: "http://localhost/netflixclone/signup.php",
    data:{email:email,password:password},
    success:function(res){
      console.log(res);
      alert(res);
    }
   });
  }
  else{
    alert("enter valid data");
  }
}