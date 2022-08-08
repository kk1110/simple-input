const validateInput= function(){
    var input = document.getElementById("inputField").value;
    var message = document.getElementById("message")
     
    if(input<0){
        message.innerHTML="Enter Positive value";
    }
        
   else if((input>0) && ((input%2===0)||(input%2!==0))){
        let value = parseInt(input);
        let output=[value+2,value+4,value+6];
        message.innerHTML=output;
    }

    else{
        message.innerHTML="";
    }
}