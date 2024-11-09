const button=document.getElementById("btnGenerator");
const passwordbox=document.getElementById("password");
const copyButton=document.getElementById("copy");

const generatepassword=()=>{

    const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+}{|\/><=-`~[]";
    let password="";
    const passwordlength=10;

    for(let i=0; i<passwordlength; i++){

        password+=chars.charAt(Math.random()*chars.length);
        console.log(password);
    }

    passwordbox.value=password;
}

button.addEventListener("click" ,generatepassword);

copyButton.addEventListener("click" ,()=>{

    const copypassword=passwordbox.value.trim();

    if(!copypassword){
        alert("Please create a password first.");
        return;
    }

    navigator.clipboard.writeText(copypassword).then(()=>{

        alert("Password copied successfully.");

    });

})


