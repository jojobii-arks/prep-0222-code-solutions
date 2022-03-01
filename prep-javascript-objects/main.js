var person = {
  firstName: 'Apple',
  lastName: 'Bee',
  hobby: 'Going to Applebees'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s full name: ', fullName);

person.job = 'Applebeing';
console.log('The person\'s job: ', person.job);
person.previousJob = 'Applewasing';
console.log('The person\'s previous job: ', person.previousJob);

console.log(person);
