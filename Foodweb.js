function myFun(){
    let searchVal = document.getElementById("inp").value.toUpperCase() ;
    let table = document.getElementsByTagName("table")
    let tr = document.getElementsByTagName("tr");

    let front = document.querySelector(".main")

    for(let i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName("td")[0];
        if(td){
            let text = td.innerText;
            if(text.toLocaleUpperCase().indexOf(searchVal) > -1){
                tr[i].style.display="";
                front.style.display="none"
            }else{
                tr[i].style.display="none"
            }
        }
    }

    if(searchVal == ""){
        front.style.display="flex"
    }
    console.log(searchVal);
}



function nav(){
    let nav = document.querySelector(".nav");
    nav.style.display="block"
    let login = document.querySelector(".login");
    login.style.display="none";

}

function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    errorMessage.textContent = ''; // Clear previous error message
    
    // Check if fields are empty
    if (username === '' || password === '') {
      errorMessage.textContent = 'Please fill out all fields.';
      return false; // Prevent form submission
    }
    
    // Simple password validation
    if (password.length < 8) {
      errorMessage.textContent = 'Password must be at least 8 characters long.';
      return false;
    }
    
    // If validation is successful, redirect to home page
    alert('Login successful!');
    window.location.href = 'FoodWeb.html'; // Redirect to home page
    return false;
  }



// Slide bar

let slide = document.querySelectorAll(".customer");
let count = 0;
console.log(slide);

slide.forEach(function(customer, index){
    customer.style.left=`${index * 100}%`
})

function next(){
    count ++;
    if(count == slide.length){
        count=0;
    }
    bar()
}

function pre(){
    count--;
    if(count == -1){
        count = slide.length-1
    }
    bar()
}


function bar(){
    slide.forEach(function(customer){
        customer.style.transform = `translateX(-${count * 100}%)`
    })
}

let a = {
    greet:"HI"
}
let c;
c=a;
a.age=11;

console.log(c.age);
