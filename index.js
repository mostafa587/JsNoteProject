
// access Elements

var UserNameSignUP = document.getElementById('UserNameSignUP');
var PasswordSignUP = document.getElementById('PasswordSignUP');
var submitSignUP = document.getElementById('submitSignUP'); // submit button for sing up
var UserNameLogIn = document.getElementById('UserNameLogIn');
var PasswordLogIn = document.getElementById('PasswordLogIn');
var submitLogIn = document.getElementById('submitLogIn'); // submit button for login
var myNoteInput = document.getElementById('myNoteInput');
var submitNote = document.getElementById('submitNote');// submit button for notes


var userInSide = localStorage.getItem("userkey")// the user name who login the bage

var notes = JSON.parse(localStorage.getItem(userInSide)) || [];// it take's its value from localstorage and it's deffine inthialy as empty array


// store sign up data at local storage

var usersArray = JSON.parse(localStorage.getItem('users')) || [];//global variable / take's it's value from localstorage or empty array /Json.parse to take the value as array again
var passwordArray = JSON.parse(localStorage.getItem('passwords')) || [];//global variable / take's it's value from localstorage or empty array /Json.parse to take the value as array again



if (submitSignUP !=null){
    submitSignUP.addEventListener('click', function(e) {
        e.preventDefault()
        var newUser = UserNameSignUP.value;
        var newPassword = PasswordSignUP.value;

        if (newUser !== "" && newPassword !== "") {
            SignUP(newUser, newPassword);
            UserNameSignUP.value = "";
            PasswordSignUP.value = "";
        } 
        else {
            alert("UserNameSignUP or PasswordSignUP not valid");
        }
    });
}




 



function SignUP (newUser, newPassword) {

    usersArray.push(newUser);// insert user into array
    localStorage.setItem('users', JSON.stringify(usersArray)); // we want to set the array of users in localstorage 

    passwordArray.push(newPassword);// insert password into array 
    localStorage.setItem('passwords', JSON.stringify(passwordArray)); // we want to set the array of password in localstorage

    
}

// will creat a fuction for login


    submitLogIn?.addEventListener('click', function(e) {// e is refare to click event object
        e.preventDefault();//this to cancel the diffult action of button to reload the bage when you click on the button in form
        //e.preventDefault(); امنع التصرف الافتراضي عند الضغط علي الزرار
        //the ? nullish obrator if the value of element = null dont run the method

        if (UserNameLogIn.value !=="" && PasswordLogIn.value !=="") {
            var UserName = UserNameLogIn.value;
            var password = PasswordLogIn.value;
            login (UserName, password);//////////////////
            UserName = ""
            password = ''
            
        }
        else if (UserNameLogIn.value == "" && PasswordLogIn.value == ""){
            alert("empty input")
        }
    });

    

function login(UserName, password) {

    for (let i = 0; i < usersArray.length; i++) {
      if (UserName === usersArray[i] && password === passwordArray[i]) {
        
        

        location.assign("file:///C:/Users/Mostfa/Documents/Desktop/Learn/JsNoteProject/note.html");

        var userInSide = UserName;// this variable is global but when change the bage by location.assign it not go into login function again so it takes the null value becouse it's not go throw login function again
        //creat array in localstorag to all users by them username // we access this array as gloabl array in line 16
        localStorage.setItem("userkey",userInSide)// saved the user name in localstorage to access in line 14 as global variable
       
        
        return;
      }
      
    }
    

  }
  
  
    submitNote?.addEventListener('click',function (){
        //the ? nullish obrator if the value of element = null dont run the method
        
            if (myNoteInput.value !== ""){
                
                
                notes.push(myNoteInput.value);// push value to the global array
                localStorage.setItem(userInSide,JSON.stringify(notes))// store the note in localstorage using the username as a key // related to line 16
                showNote ()
                myNoteInput.value =""
            }
        
        
        
        
        });







function showNote (){
        var div1 = document.getElementById("container")
        
        div1.innerHTML = '';

        for (let i = 0; i < notes.length;i++){
            var div2 = document.createElement("div")
            div2.className= "nota"
            div2.innerText = notes[i]
            div1.appendChild(div2);
        }

        

}








  










