function whoPaying(names){
    var numberOfPeople = names.length;
    var randomPersonsPosition = Math.floor(Math.random() * numberOfPeople /*0-0.9999  0-4.9999*/);
    var randomPersons = names[randomPersonsPosition];

    return randomPersons+" is going to buy lunch today!"
}
   
