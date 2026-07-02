//a list of services stored in a JavaScript array
let services = [
    {name: "IGCSE Exam Training" , price: 5000},
    {name: "One on One training" , price: 15000},
    {name: "Life Coaching Services" , price: 20000},
    {name: "Advanced French Tutoring" , price: 35000}
];
//Printing out the array list using for each
services.forEach(function(service){
    console.log(service.name)
    console.log(service.price)
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
    





