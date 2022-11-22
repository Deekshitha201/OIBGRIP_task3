function converter(){
    let temp=document.getElementById("temp").value;
    let tempSelected=document.getElementById("temp2");
    let valueTemp=temp2.options[tempSelected.selectedIndex].value;
    if(valueTemp == "celsius"){
        console.log(valueTemp)
        document.getElementById("output").innerHTML=Math.round((temp*9/5)+32)+"in farenheit"
    }
    else{
        console.log(valueTemp)
        let c=Math.round((temp-32)* 5/9);
        document.getElementById("output").innerHTML=c+"in celsius"
    }
};
