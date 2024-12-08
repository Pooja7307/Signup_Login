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
signup("Glory")