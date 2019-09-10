// Donation JQ hala

$("#myBtn1").click(function(){
    $("#myForm1").slideToggle(500)
})


$("#myBtn2").click(function(){
    
    $("#myForm1").slideUp(500)
    $("#myForm2").slideToggle(500)
})
// Donation JQ hala
// login button 

let loginBtnA = document.getElementById('loginBtn');
loginBtnA.onclick = function(){
    document.getElementById('loginBtn').setAttribute("onclick","window.open('Saleh-index.html','_blank')");

}
//login button
// nav donate click

let navBtnA = document.getElementById('donate');
navBtnA.onclick = function(){
    document.getElementById('donate').setAttribute("onclick","window.open('hala-index.html','_blank')");

}
// nav donate click
// nav activities click
let actBtnA = document.getElementById('activities');
actBtnA.onclick = function(){
    document.getElementById('activities').setAttribute("onclick","window.open('Ahmed-ibrahim-index.html','_blank')");

}