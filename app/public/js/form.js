$('.scanner').click(function(){$('.top-scan,.bottom-scan').toggleClass('scan');}); 


function Login(form) {
username = ["sherlockholmes", "sh", 'sherlockholmessh', 'sherlock'];
password = ["LULA2022", 'lula2022', 'admin'];
if (password.includes(form.password.value.toLowerCase()) && username.includes(form.username.value.toLowerCase()))
{form.username.value='';form.password.value='';form.submit.value='Access Granted';
$('#Overlay,input').addClass("yay");
setTimeout(function(){$('#Overlay,input').removeClass("yay");
form.submit.value='Login';form.submit.blur();},2000);
window.location = "/hydra"                     
}
else {form.username.value='';form.password.value='';form.submit.value='Access Denied';
$('#Overlay,input').addClass("nay");
setTimeout(function(){$('#Overlay,input').removeClass("nay");
form.submit.value='Login';form.username.focus();},2000);   
}return true;}