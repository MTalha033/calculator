
let string="";
let buttons=document.querySelectorAll(".btn");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.innerHTML=="="){
            string=eval(string);
            document.getElementById("str").value=string;
            console.log(string);
        }
        else if(button.innerHTML=="AC"){
            string="";
            document.getElementById("str").value="";
        }
        else if(button.innerHTML=="C"){
            string=string.slice(0,-1);
            document.getElementById("str").value=string;
        }
        else{
        string=string+button.innerHTML;
        document.getElementById("str").value=string;
        }

    })
})

