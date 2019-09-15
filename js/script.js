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
    window.open('hala-index.html','_self');
};
// nav donate click
// nav activities click
let actBtnA = document.getElementById('activities');
actBtnA.onclick = function(){
    window.open('Ahmed-ibrahim-index.html','_self');
};
// nav about click
// nav about click
let aboutBtnA = document.getElementById('about');
aboutBtnA.onclick = function(){
    window.open('Mohamed-adel-index.html','_self');
};
let homeBtnA = document.getElementById('home');
homeBtnA.onclick = function(){
    window.open('index.html','_self');
};