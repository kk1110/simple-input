const validateInput= function(){
    var input = document.getElementById("inputField").value;
     
    if(input<0){
        document.getElementById("message").innerHTML="Enter Positive value";
    }
        
   else if((input>0) && ((input%2===0)||(input%2!==0))){
        let value = parseInt(input);
        let output=[value+2,value+4,value+6];
        document.getElementById("message").innerHTML=output;
    }

    else{
        document.getElementById("message").innerHTML="";
    }
}