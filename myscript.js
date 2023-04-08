// Variable is declared to distinguish between odd and even row elemnts
let count = 0;

// document.querySelector("button").addEventListener("click",addInfo)

// function for displaying the information in the table
function addInfo()
{
    var nameCheck = nameValid();
    //if name is not valid return and display error message
    if(nameCheck == false){
        return;
    }

    //if Email is not valid return and display error message
    var emailCheck = emailValid();
    if (emailCheck==false){
        return;
    }

    //if Website is not valid return and display error message
    var websiteCheck = websiteValid();
    if(websiteCheck == false){
        return;
    }

    //if gender is not choosen display a error message
    var genderCheck = genderValid();
    if(genderCheck==false){
        return;
    }

    //choose atleast one skill, if not display error messg
    var SkillCheck = SkillValid();
    if(SkillCheck == false){
        return;
    }

    //Confirmation before submitting the form
    var conf = confirm("Do you want to submit");
    if(conf == false){
        return 
    }

    var genderOutput = genderChoice();
    var skillOutput  = skillChoices();

    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }

    // Odd row elements have different styling than even row
    if (count % 2 == 0) {
        $("#productTable tbody").append(
            "<tr>" + 
                "<td id='newData' class='animated fadeIn' style='height:100px'>"  + 
                    "<b>" + $("#name").val() + "</b>" + "<br>" +
                    genderOutput + "<br>" + 
                    $("#email").val() + "<br>" + 
                    '<a href=" '+ "https://" + $("#website").val() +' "  target="_blank" >' +  $("#website").val() +'</a>' + "<br>" + 
                    skillOutput + 
                "</td>" + 
                "<td id='newData' class='animated fadeIn'>" + 
                    '<a href="' + $("#imageLink").val() + '" target="_blank">' + '<img src="'+ $("#imageLink").val() + '" alt="Photo" title="Click to open in new tab" style="width:125px;height:100px"></a>' +
                "</td>" + 
            "</tr>");

    }
    // Even Row elements 
    else {
        $("#productTable tbody").append(
            "<tr>" + 
                    "<td id='newData' class='animated fadeIn' style='height:100px'>" + 
                    "<b>" + $("#name").val() + "</b>" + "<br>" +
                    genderOutput + "<br>" + 
                    $("#email").val() +"<br>" + 
                    '<a href="' + "https://" + $("#website").val() + '" target="_blank" >' +  $("#website").val()+'</a>' + "<br>" + 
                    skillOutput + 
                "</td>" + 
                "<td id='newData' class='animated fadeIn'>" + '<a href="' + $("#imageLink").val() + '" target="_blank">' + '<img src="' + $("#imageLink").val() + '" alt="Photo" title="Click to open in new tab" style="width:125px;height:100px"></a>' + 
                "</td>" + 
            "</tr>");
    }
    count += 1;

    document.getElementById("myForm").reset()
}


// Gives the checked radio key of gender
function genderChoice()
{
    const choices = document.querySelectorAll('input[name="genderChoice"]');
    let selectedValue;
    for (const choice of choices) {
        if (choice.checked) {
            selectedValue = choice.value;
            break;
        }
    }
    return selectedValue;           // already in string
}

// Gives the skill choices made by user
function skillChoices()
{
    const choices = document.querySelectorAll('input[name="skillChoices"]');
    //console.log(choices);
    let selectedValue = [];
    for (let choice in choices) {
        //console.log(choices[choice].value);
        if (choices[choice].checked) {
            selectedValue.push(choices[choice].value);
        }
    }
    return selectedValue.toString();        //in array to string
}


// Validation of Email
function emailValid()
{
    var text = document.getElementById("email").value;
    var regex = /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ ;

    if(regex.test(text)){
        document.getElementById('emailLabel').style.visibility="hidden" ;
        document.getElementById('errorMsg').style.visibility="hidden" ;
        // console.log("true");
        return true;
    }
    else if(text.length==0){
        document.getElementById('emailLabel').innerHTML='Enter Email';
        document.getElementById('emailLabel').style.visibility="visible";
        document.getElementById('errorMsg').style.visibility="visible" ;
        alert("Please Enter your email to Proceed");
    }
    else{
        document.getElementById('emailLabel').innerHTML='Invalid Email';
        document.getElementById('emailLabel').style.visibility="visible";
        alert("Enter a valid email id ! Eg: virat@gmail.com");
        // text.style.border="solid 3px red";
        // document.getElementById('email').style.border="solid 3px red";
    }
    return false;

}

// Validation of Name
function nameValid(){
    var nametext = document.getElementById('name').value;
    if(nametext.length==0){
        document.getElementById('nameLabel').style.visibility="visible";
        document.getElementById('errorMsg').style.visibility="visible" ;
        alert("Please enter your name to proceed");
    }
    else{
        
        document.getElementById('nameLabel').style.visibility="hidden" ;
        document.getElementById('errorMsg').style.visibility="hidden" ;
        return true;
    }
    return false
}


// Validation of Website
function websiteValid()
{
    var websiteText = document.getElementById('website').value;
    var WebRegex = /^(https?:\/\/)?(www\.)?[0-9a-z\.]+\.[-_0-9a-z]+[A-Z0-9a-z/\.-]+$/;

    if(WebRegex.test(websiteText)){
        document.getElementById('websiteLabel').style.visibility="hidden" ;
        document.getElementById('errorMsg').style.visibility="hidden";
        return true;
        
    }
    else if(websiteText.length==0){

        alert('Enter a URL to proceed !');
        document.getElementById('websiteLabel').innerHTML="Enter URL";
        document.getElementById('websiteLabel').style.visibility="visible";
        document.getElementById('errorMsg').style.visibility="visible" ;
        
    }
    else{
        document.getElementById('websiteLabel').innerHTML="Invalid URL";
        document.getElementById('websiteLabel').style.visibility="visible";
        alert("Enter a Valid URL ! Eg: \"http://www.google.com\" ");
    }
    return false
}

// Validation of gender
function genderValid()
{
    gendercheckMale = document.getElementById('male');
    genderCheckFemale = document.getElementById('female');

    if(gendercheckMale.checked || genderCheckFemale.checked){
        document.getElementById('errorMsg').style.visibility="hidden" ;
        
        return true;
        
    }
    else{
        document.getElementById('errorMsg').style.visibility="visible" ;
        alert("Enter your Gender to proceed");
        return false;
    }
}

// Validation of Skill
function SkillValid()
{
    skillCheckJava = document.getElementById('java');
    skillCheckHtml = document.getElementById('html');
    skillCheckCss = document.getElementById('css');

    if(skillCheckJava.checked || skillCheckHtml.checked || skillCheckCss.checked ){
        document.getElementById('errorMsg').style.visibility="hidden" ;
        return true;
        
    }
    else{
        document.getElementById('errorMsg').style.visibility="visible" ;
        alert("Enter atleast one skill to Enroll !");
        return false;
    }
}