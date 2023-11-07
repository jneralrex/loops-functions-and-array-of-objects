for (let i = 0; i <= 100; i++){
 console.log(i)
}

let groceries = ["tomato", "lettuce", "onion", "corn", "egg"]
for (let i = 0; i < groceries.length; i++){
 if (groceries.length <= 5) {
  groceries.push("fish", "banana", "butter", "bread")
  
 }
 console.log(groceries[i]);
}


const Morning = "Good Morning"
const noon = "Good Afternoon"

function greetings(){
 alert(noon)
 alert(Morning)
}
greetings();

let vehicle = [{
 make: "Toyota",
 class: "Camry",
 year: 2019,
 color: "Black",
 transmission: "Automatic"
},
 {
  make: "Mazda",
  class: "323",
  year: 2020,
  color: "Black",
  transmission: "Automatic"
 },
 {
  make: "Benz",
  class: "4matic",
  year: 2013,
  color: "Black",
  transmission: "Automatic"
 },
 {
  make: "VolksWagon",
  class: "Golf",
  year: 2015,
  color: "Black",
  transmission: "Automatic"
 },
 {
  make: "Mitsubishi",
  class: "Civic Bus",
  year: 2018,
  color: "Black",
  transmission: "Automatic"
 },
 {
  make: "Pontiac Vibes",
  class: "Civic",
  year: 2022,
  color: "Black",
  transmission: "Automatic"
 },
 {
  make: "Honda",
  class: "Civic",
  year: 2019,
  color: "Black",
  transmission: "Automatic"
 },
 {
  make: "Audi",
  class: "Civic",
  year: 2005,
  color: "Black",
  transmission: "Automatic"
 },
 {
  make: "BMW",
  class: "Civic",
  year: 2003,
  color: "Black",
  transmission: "Automatic"
 }];



for (let i = 0; i < vehicle.length; i++) {
 console.log(vehicle[i]);
}

let i = 0;
while (i < 5) {
 console.log("This is while loop")
 i++;
}