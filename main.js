

//create functions that populate the display.

const results = document.getElementById("results");
console.log(results);

const numberBtn = document.querySelectorAll('button');
console.log(numberBtn);


//
let arr = Array.from(numberBtn);
arr.forEach(button =>{
    button.addEventListener("click",display,false)
})
let string = "";
function display(e) {    
    if (e.target.value == "="){
        string = eval(string);
        results.value = string;
    } else if (e.target.value == "clear") {
        string = "";
        results.value = string;

    }else if(e.target.value == "del"){
       string = string.substring(0,string.length-1);
       results.value = string}
    else{
    string += e.target.value; 
    results.value = string;
    }    
       
}  









