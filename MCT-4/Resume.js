function Submit_Data() {

    /*********************************************************
    * 
    * 
    *********************************************************/
    let write_Information = document.getElementById("Name").value;
    let personal_Information = document.getElementById("Namep");
    personal_Information.innerHTML = write_Information;
    // console.log("myname");
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Email = document.getElementById("Email").value;
    let Emailp = document.getElementById("Emailp");
    Emailp.innerHTML = Email;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let phone = document.getElementById("Phone").value;
    let phonep = document.getElementById("Phonep");
    phonep.innerHTML = phone;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Address = document.getElementById("Address").value;
    let Addressp = document.getElementById("Addressp");
    Addressp.innerHTML = Address;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Country = document.getElementById("Country").value;
    let Countryp = document.getElementById("Countryp");
    Countryp.innerHTML = Country;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Collage_Name = document.getElementById("Collage_Name").value;
    let Collage_Namep = document.getElementById("Collage_Namep");
    Collage_Namep.innerHTML = Collage_Name;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Skills = document.getElementById("Skills").value;
    let Skillsp = document.getElementById("Skillsp");
    Skillsp.innerHTML = Skills;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Person_Summary = document.getElementById("Person_Summary").value;
    let Person_Summaryp = document.getElementById("Person_Summaryp");
    Person_Summaryp.innerHTML = Person_Summary;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Job_Year = document.getElementById("Job_Year").value;
    let Job_Yearp = document.getElementById("Job_Yearp");
    Job_Yearp.innerHTML = Job_Year;
    /*********************************************************
    * 
    * 
    *********************************************************/

    let Company_Name = document.getElementById("Company_Name").value;
    let Company_Namep = document.getElementById("Company_Namep");
    Company_Namep.innerHTML = Company_Name;
    /*********************************************************
    * 
    * 
    *********************************************************/
    let Work_Information = document.getElementById("Work_Information").value;
    let Input_Work = document.getElementById("Input_Work");
    Input_Work.innerHTML = Work_Information;
    /*********************************************************
    * 
    * 
    *********************************************************/
    // let Work_Information1 = document.getElementById("Work_Information1").value;
    // let Input_Work1 = document.getElementById("Input_Work1");
    // Input_Work1.innerHTML = Work_Information1;

    /*********************************************************
    * 
    * 
    *********************************************************/

    let Languages = document.getElementById("Languages").value;
    let Languagep = document.getElementById("Languagep");
    Languagep.innerHTML = Languages;

    const selectImageInput = document.getElementById('Select_Image');
        const selectedImageElement = document.getElementById('Selected_Image');

        // Add an event listener to the file input
        selectImageInput.addEventListener('change', function() {
            // Check if a file is selected
            if (selectImageInput.files && selectImageInput.files[0]) {
                // Get the selected file
                const selectedFile = selectImageInput.files[0];
                
                // Create a FileReader object to read the selected file
                const reader = new FileReader();

                // Set up the FileReader to display the image once loaded
                reader.onload = function(e) {
                    // Set the source of the image element to the data URL of the selected file
                    selectedImageElement.src = e.target.result;
                    // Make the image element visible
                    selectedImageElement.style.display = 'block';
                };

                // Read the selected file as a data URL
                reader.readAsDataURL(selectedFile);
            }
        });

    /*********************************************************
    * 
    * 
    *********************************************************/
    let degree_Name = document.getElementById("degree_Name").value;
    let degree_Namep = document.getElementById("degree_Namep");
    degree_Namep.innerHTML = degree_Name;

    /*********************************************************
    * 
    * 
    *********************************************************/

    let Passing_Year = document.getElementById("Passing_Year").value;
    let Passing_Yearp = document.getElementById("Passing_Yearp");
    Passing_Yearp.innerHTML = Passing_Year;

    let Reference_name = document.getElementById("Reference_name").value;
    let Reference_namep = document.getElementById("Reference_namep");
    Reference_namep.innerHTML = Reference_name;

    let position = document.getElementById("position").value;
    let positionp = document.getElementById("positionp");
    positionp.innerHTML = position;

    let Reference_Phone = document.getElementById("Reference_Phone").value;
    let Reference_Phonep = document.getElementById("Reference_Phonep");
    Reference_Phonep.innerHTML = Reference_Phone;

    let Reference_Email = document.getElementById("Reference_Email").value;
    let Reference_Emailp = document.getElementById("Reference_Emailp");
    Reference_Emailp.innerHTML = Reference_Email;

}

function Show_Info() {
    // Retrieve the information element
    const informationElement = document.getElementById('Education2');
    const Language_Button = document.querySelector(".Education_Button");

    // Toggle the visibility of the information element
    if (informationElement.style.display === 'none' ) {
        informationElement.style.display = 'block' ;
        Language_Button.style.display = 'none';
        
    } else {
        informationElement.style.display = 'none';
        Language_Button.style.display = 'block';
      
    }

}

function Show_Info1(){
    const informationElement1 = document.getElementById('Education3');
    const Language_Button2 = document.querySelector(".Education_Button2");
if (informationElement1.style.display === 'none') {
    informationElement1.style.display = 'block';
    Language_Button2.style.display = 'none';
} else {
    informationElement1.style.display = 'none';
    Language_Button2.style.display = 'block';
}
}

function choose_language(){
    const Language = document.getElementById("Language");
    const Language_Button = document.getElementById("Language_Button");
    if(Language.style.display === 'none'){
        Language.style.display = 'block';
        Language_Button.style.display = 'none';
    }else{
        Language.style.display = 'none';
        Language_Button.style.display = 'block';
    }
}

function Add_Job(){
    const Work_Experience_1 = document.getElementById("Work_Experience_1");
    if(Work_Experience_1.style.display === 'none'){
        Work_Experience_1.style.display = 'block';
    }else{
        Work_Experience_1.style.display = 'none';
    }
}