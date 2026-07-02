//Auto refill the name in the input field(Persistence State)
let savedName = localStorage.getItem("savedName");

if (savedName) {
    document.querySelector("#Name").value = savedName;
}

//a list of services stored in a JavaScript array
let services = [
    {name: "IGCSE Exam Training" , price: 5000},
    {name: "One on One training" , price: 15000},
    {name: "Life Coaching Services" , price: 20000},
    {name: "Advanced French Tutoring" , price: 35000}
];

//Printing out the array list using for each
let servicesList = document.querySelector("#servicesList");

services.forEach(function(service) {
    let li = document.createElement("li");
    li.textContent =
        service.name + " - KSh " + service.price;
    servicesList.appendChild(li);
});


//Dynamically Add & Remove elements
let wishListInput = document.querySelector("#wishlistInput");
let wishListButton = document.querySelector("#wishlistForm button");
let wishListItems = document.querySelector("#wishlistItems");

wishListButton.addEventListener("click", function(event) {

    // Prevent form submission
    event.preventDefault();

    let wishInputValue = wishListInput.value;

    // Update the list if input is not empty
    if (wishInputValue !== "") {

        let li = document.createElement("li");
        let button = document.createElement("button");

        li.textContent = wishInputValue;
        button.textContent = "Remove";

        button.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(button);
        //appending list to the ul
        wishListItems.appendChild(li);

        // Clear what was typed in input
        wishListInput.value = "";
    }
});
//delete an existing item
        let deleteButtons = document.querySelectorAll(".deletebtn");

deleteButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest("li").remove();
    });
});

//Form handling and validation feedback
  let feedbackForm = document.querySelector("#feedbackForm");
let feedbackOutput = document.querySelector("#feedbackOutput");

feedbackForm.addEventListener("submit", function(event) {

    // Prevent form from submitting normally
    event.preventDefault();

    const name = document.querySelector("#Name");
    const email = document.querySelector("#Email");
    const message = document.querySelector("#Message");

    // Validation
    if (
        name.value === "" ||
        email.value === "" ||
        message.value === ""
    ) {

        feedbackOutput.innerHTML =
            "<p>Please fill in all fields before submitting.</p>";
        feedbackOutput.style.color = "red";

    } else {
        feedbackOutput.innerHTML =
            "<strong>Form Submitted Successfully</strong><br>" +
            "<p>Name: " + name.value + "</p>" +
            "<p>Email: " + email.value + "</p>" +
            "<p>Message: " + message.value + "</p>";

        feedbackOutput.style.color = "green";

        //save the name
        localStorage.setItem("savedName", name.value);

        // Clear the form fields
        name.value = "";
        email.value = "";
        message.value = "";
    }
});  

//Click to reveal banner and caption
let bannerImage = document.querySelector("#bannerImage");
let bannerCaption = document.querySelector("#bannerCaption");

bannerImage.addEventListener("click", function(){
    bannerCaption.classList.toggle("hidden")
});





