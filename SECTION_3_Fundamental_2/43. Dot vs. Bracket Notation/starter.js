const jonas = {
  firstName: "Jonas",
  lastName: "Macheak",
  age: 2023 - 2004,
  job: "teacher",
  friend: ["Michael", "Peter", "Steven"]
};

console.log(jonas);

console.log(jonas.lastName);

console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


// const interestedIn = prompt('What do you want to know about Jonas?');

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// } else{
//     console.log('Wrong request!');
// }

jonas.location = "Portugal";
jonas['twitter'] = '@jonasschmed';
console.log(jonas);


console.log(`${jonas.firstName} has ${jonas.friend.length}, and his best friend is called ${jonas.friend[0]}`)