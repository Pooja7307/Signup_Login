let userNames = ["Glory","Praise","Joy","Emannuel"];
function signup(str){
   let filtredData = userNames.filter((ele,i)=> ele==str)
   if(filtredData.length==0){
    userNames.push(str)
    console.log("Signup Successfull..")
   }else{
    console.log("Already Registered...")
   }
}


function login(str, password){
   let filtredData = userNames.filter((ele,i)=> ele==str)
   if(filtredData.length==0){
    userNames.push(str)
    console.log("User Not Found... Please Signup")
   }else{
    if(password=="Emp@123")
    {
        console.log("Login Successful...")
    }
   
   else{
console.log("Wrong Password")
   }
}
}
login("Emannuel","Emp@123")