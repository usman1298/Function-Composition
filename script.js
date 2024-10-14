function getDressed(person) {
    return person + " dressed";
}
  
function putOnShoes(person) {
    return person + " with shoes";
}
function readyForWork(person) {
    return putOnShoes(getDressed(person));
}  
console.log(readyForWork("Usman")); 
