function validation ()
{
    var street = document.hello.sa.value;
    var street2 = document.hello.sa2.value;
    var city = document.hello.cty.value;
    var state = document.hello.ste.value;
    var zip = document.hello.zip.value;
    var phonenumber = document.hello.pn.value;
    var email = document.hello.email.value;
    if (street == "")
    {
        alert ("woah. hold up. you need to actually enter an address here");
    }
    if (street2 =="")
    {
        alert ("sooooo you need to input an address for this to actually work");
    }
    if (city =="")
    {
        alert ("Dude you need to enter a city here");
    }
    if (state =="")
    {
        alert ("I know you're from a state..so enter it here"); 
    }
    if (zip =="")
    {
        alert ("ahhh yeahhhh you forgot to enter your zip code");
    }
    if (phonenumber =="")
    {
        alert ("gimme yo digits");  
    }
    if(email =="")
    {
        alert ("yoooooo enter an email address");
    }
    
    
}