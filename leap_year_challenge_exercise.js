function isLeap(year){
    if(year % 4 === 0 ){//the rest of the division by 4
       if(year % 100 === 0){
           if(year % 400 === 0){
               return 'Leap year.';
           }else{
               return 'Not leap year.';
           }
       }else{
           return 'Leap year.';
       }
    }else{
        return 'Not leap year.';
    }
}