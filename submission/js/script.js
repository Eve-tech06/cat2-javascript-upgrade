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




